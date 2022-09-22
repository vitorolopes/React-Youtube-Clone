import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const VideoItem = ({video}) => {
  console.log(video)

  return (

      <Card
          className='recipe-card'
          sx={{
            width: 400,
            height: 310,
            boxShadow: 'none',
            borderRadius: 0,
          }}
        >

        <CardMedia
            component='img'
            height='250'
            image={
              (video.snippet && video.snippet.thumbnails.high.url ) ||
              'https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg'
            }
            sx={{ borderRadius: 2 }}
        />

        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            {(video.snippet && video.snippet.title) || "NO TITLE FOR THIS VIDEO"}
          </Typography>
        </CardContent>

      </Card>

  )
}

export default VideoItem