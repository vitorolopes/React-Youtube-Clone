import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const StateContext = createContext();
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const StateContextProvider = ( {children} ) => {

    const [buttonsOrDetailsData, setButtonsOrDetailsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [videosData, setVideosData] = useState([])

    const fetchButtonsOrDetailsData = async (url) => { 
        setLoading(true)
        const data = await axios.get(
                                    `${baseUrl}/${url}`,
                                     {
                                        params:{
                                            key: process.env.REACT_APP_API_KEY,
                                            maxResults: 5,
                                            regionCode:"IN"   
                                        } 
                                     }
        )
        setLoading(false)
        console.log(data.data.items);
        setButtonsOrDetailsData(data.data.items)
    }

    const fetchVideosData = async (url) => { 
        setLoading(true)
        const data =  await axios.get(
                                     `${baseUrl}/${url}`,
                                     {
                                        params:{
                                            key: process.env.REACT_APP_API_KEY,
                                            maxResults: 5,
                                            regionCode:"IN"   
                                        }   
                                     }
        )
        setLoading(false)
        console.log(data.data.items)
        setVideosData(data.data.items)
    }

    return(
        <StateContext.Provider
            value={{
                loading,
                fetchButtonsOrDetailsData,
                buttonsOrDetailsData,
                fetchVideosData,
                videosData
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)