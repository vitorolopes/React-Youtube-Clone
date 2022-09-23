import { Box, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../contexts/StateContextProvider';
import ReactPlayer from 'react-player';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import VideoItem from './VideoItem'


const VideoDetails = () => {

  const {id} = useParams();

  const {fetchButtonsOrDetailsData, buttonsOrDetailsData, fetchVideosData, videosData} = useStateContext();

  const [videoDetails, setVideoDetails] = useState()

  useEffect(() => {
    fetchButtonsOrDetailsData(`videos?part=snippet,statistics&id=${id}`);
    // We call this function (everytime id changes)
    // that (with this url) requests
    // the Details of the Video that was clicked and
    // sets buttonsOrDetailsData to be equal to
    // the data that this request retrieves

    fetchVideosData(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    // We request the Videos (related videos!) and set videosData to be equal to
    // the data that the request retrieves
  }, [id])
  
  useEffect(() => {
    setVideoDetails(buttonsOrDetailsData[0])
  }, [buttonsOrDetailsData])
  

  return (
    <Box
        className='video-detail-container'
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        }}
    >
{/* // * LEFT SIDE BOX start*/}
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 1,
              pb: 1,
              position: 'relative',
              width: '100%',
            }}
        > 

            <Box
                  className='video-detail'
                  sx={{ position: 'fixed', top: '100px', left: '10px' }}
            >

                {/* //* REACT PLAYER COMPONENT */}
                <ReactPlayer
                    className='video-card'
                    controls
                    url={`https://www.youtube.com/watch?v=${id}`}
                />

                {/* //* TYPOGRAPHY (Video Title) */}
                <Typography sx={{ fontSize: 18, fontWeight: 600, p: 1.5 }}>
                        {videoDetails?.snippet?.title}
                </Typography>

                {/* //* BOX View Count & Likes/Dislikes CONTAINER  */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* //* TYPOGRAPHY (View Count)  */}
                    <Box sx={{ opacity: 0.7 }}>
                            
                            <Typography sx={{ marginBottom: '5px' }}>
                                {parseInt(
                                  videoDetails?.statistics?.viewCount
                                ).toLocaleString('en-US')}{' '} views
                            </Typography>
                    </Box>

                    {/* //* LIKES count/ DISLIKES */}
                    <Box
                          sx={{
                            opacity: 0.7,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                          }}
                          className='like-dislike'
                      >
                        {/* //* LIKES count*/}
                        <Box
                          sx={{
                            marginBottom: '5px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <ThumbUpAltOutlinedIcon />
                          <Typography>
                            {parseInt(
                              videoDetails?.statistics?.likeCount
                            ).toLocaleString('en-US')}
                          </Typography>
                        </Box>
                        {/* //* DISLIKES */}
                        <Typography
                          sx={{
                            marginBottom: '5px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <ThumbDownAltOutlinedIcon />

                        </Typography> 

                    </Box>

                </Box>

            </Box>        

        </Box>
{/* // * LEFT SIDE BOX end*/} 


{/* // * RIGHT SIDE BOX start*/}
        <Box
            sx={{
              mt: 10,
            }}
            className='related-videos'
          >

            <Typography
              sx={{ fontSize: 25, fontWeight: 800, m: 2, textAlign: 'center' }}
            >
              Similar Videos
            </Typography>

            <Box className='related-videos-container'>
              {videosData.map((video) => {
                return (
                <VideoItem
                  video={video}
                   id={(video.id.videoId && video.id.videoId) || video.id}
                //  in some videos the id is in video.id property
                //  in some videos the id is in video.id.videoId property
                   key={(video.id.videoId && video.id.videoId) || video.id}
                />)
              })}
            </Box>

        </Box>
{/* // * RIGHT SIDE BOX end*/}

    </Box>
  )
}

export default VideoDetails