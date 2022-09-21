import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh"

            }}
        >
            <CircularProgress color='secondary'/>
            <CircularProgress color='success'/>
            <CircularProgress color='inherit'/>
        </Box>
    )
}

export default Loader