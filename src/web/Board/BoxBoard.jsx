import React from 'react';
import { Box, Typography } from '../components';

function BoxBoard() {
  return (
    <>
      <Typography scale="h2">Box</Typography>
      <Box bg="tomato" color="white" p={1}>This is the Box</Box>
      <Box bg="tomato" color="white" p={1} as="span">This is the Box</Box>
    </>
  );
}

export default BoxBoard;
