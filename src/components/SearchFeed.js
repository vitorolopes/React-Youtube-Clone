import React from 'react';
import { Box, Typography } from '@mui/material';
import VideoItem from './VideoItem';
import { useStateContext } from '../contexts/StateContextProvider';
import Loader from './Loader';

const SearchFeed = () => {
  const { videosData, loading } = useStateContext();
  
  if (loading) {
    return <Loader />;
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 1,
        mt: 10,
      }}
    >

          <Typography 
            sx={{ fontSize: 25, fontWeight: 900, 
                  p: 3, pb: 1, pt: 0, color: "blue",
                  display: "block", width: "100%", 
                  textAlign: "center" }}>
                    Searched Videos
          </Typography>

          {videosData.length !== 0 &&
            videosData.map((video) => (
              <VideoItem
                key={video.id.videoId}
                video={video}
                id={video.id.videoId}
              />
            ))}

    </Box>
  );
};

export default SearchFeed;