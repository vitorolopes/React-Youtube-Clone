import { Box, Button, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import Loader from './Loader';
import HorizontalScroll from 'react-scroll-horizontal';
import VideoItem from './VideoItem'

const Feed = () => {

  const {loading, fetchButtonsOrDetailsData, buttonsOrDetailsData,
         fetchVideosData, videosData
        } = useStateContext()

  const [buttonKeyword, setButtonKeyword] = useState()

  useEffect(() => {
    //* fetches the info to "label" the buttons or the data relative to the details
    //* of a particular video clicked by the user
    fetchButtonsOrDetailsData('videoCategories?part=snippet');
    if(buttonKeyword) {
    //* fetches the videos that are displayed when the user clicks one of the category buttons
       fetchVideosData(`search?part=snippet&q=${buttonKeyword}`)
    } else {
    //* fetches the videos that are displayed on loading 
       fetchVideosData("videos?part=snippet&chart=mostPopular")
    }
  }, [buttonKeyword])
  

  if(loading) return <Loader/>

  return (
    <Box>

       <Box
                className='categories'
                sx={{
                    display: 'flex', gap: 5, overflow: 'auto',
                    width: '100%', height: '100px', mt: 10,
                }}
            > 
{/* <HorizontalScroll> Positioning the cursor over the buttons & Ctrl+Scroll */}
                <HorizontalScroll reverseScroll={true}> 
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
                            onClick={()=>setButtonKeyword(category.snippet.title)}
                        >
                             {category.snippet.title}
                        </Button>
                    ))}
                </HorizontalScroll>
      </Box>

      <Box sx={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            alignItems: 'center', gap: 2, p: 1,
          }}>
        
          <Typography sx={{ fontSize: 25, fontWeight: 900, p: 3, pb: 1, pt: 0 }}>
                       { buttonKeyword || "Recommended "} Videos
          </Typography>

      </Box>  

      <Box
          sx={{
          display: 'flex', flexWrap: 'wrap', gap: 2, p: 1,
          justifyContent: 'center', alignItems: 'center',
          }}
      >
        {videosData.map( video => {
          return(
            <VideoItem 
              video={video}
              id={(video.id.videoId && video.id.videoId) || video.id}
              key={(video.id.videoId && video.id.videoId) || video.id}
            />
          )  
        })}
      </Box>
      
    </Box>
  )
}

export default Feed