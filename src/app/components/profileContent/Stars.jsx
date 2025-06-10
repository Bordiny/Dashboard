"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Stars = () => {
    const [value, setValue] = React.useState(5);
    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />


        </Box>
    );
}

export default Stars;
