import { Box, Button } from '@mui/material';
import React, {useEffect} from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import Loader from './Loader';
// import HorizontalScroll from 'react-scroll-horizontal';
import HorizontalScroll from 'react-horizontal-scrolling'

const Feed = () => {

  const {loading, fetchButtonsOrDetailsData,
         buttonsOrDetailsData} = useStateContext()

  useEffect(() => {
    fetchButtonsOrDetailsData('videoCategories?part=snippet');
  }, [])
  

  if(loading) return <Loader/>

  return (
    <Box>
       <Box
           className="categories"
           sx={{
                display: "flex", gap: 5, overflow: "auto", 
                width: "100%", height: "100%", mt: 10, mb: 10,
           }}
       >
            <HorizontalScroll style={{backgroundColor: "blue"}}>  
                    {buttonsOrDetailsData.map((category) => (
                        <Button
                            className='category-button'
                            sx={{
                                width: '170px',
                                height: '50px',
                                background: '#F9F9F9',
                                borderRadius: 20,
                                color: 'black',
                                cursor: 'pointer',
                                fontWeight: 600,
                                mt: 1,
                                ml: 1,
                            }}
                            key={category.id}
                        >
                             {category.snippet.title}
                        </Button>
                    ))}
            </HorizontalScroll>
            
       </Box>

         <Box style={{height: "200px", border:"solid 3px red"}}>
            MAP VIDEOS
        </Box> 

    </Box>
  )
}

export default Feed