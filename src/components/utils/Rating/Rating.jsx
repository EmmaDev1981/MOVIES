import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({value}) {

  return (
    <Box>
     <Box
      sx={{
        '& > legend': { display:"flex" },
      }}
    >
      <Typography component="legend">{`Rating: ${value}`}</Typography>
      <Rating name="customized-10" max={10} defaultValue="" value={value ?? parseInt(value)} readOnly />
    </Box>
    </Box>
  );
}