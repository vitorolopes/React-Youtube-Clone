import { Box, Button, Typography } from '@mui/material';
import React, {useEffect} from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import Loader from './Loader';
import HorizontalScroll from 'react-scroll-horizontal';

const Feed = () => {

  const {loading, fetchButtonsOrDetailsData, buttonsOrDetailsData,
         fetchVideosData, videosData
        } = useStateContext()

  useEffect(() => {
    //* fetches the info to "label" the buttons (latter on will fetch more stuff)
    fetchButtonsOrDetailsData('videoCategories?part=snippet');
     //* fetches the videos that are displayed on loading 
    fetchVideosData("videos?part=snippet&chart=mostPopular")
  }, [])
  

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
            
              <Box>
                <Typography sx={{ fontSize: 25, fontWeight: 900, p: 3, pb: 1, pt: 0 }}>
                            Recommended Videos
                </Typography>
              </Box>  

              <Box
                  sx={{
                  display: 'flex', flexWrap: 'wrap', gap: 2, p: 1,
                  justifyContent: 'center', alignItems: 'center',
                  }}
              >
                {videosData.map( video => 
                  <div>{video.snippet.localized.title}</div>
                )}
              </Box>

              

        </Box> 

    </Box>
  )
}

export default Feed