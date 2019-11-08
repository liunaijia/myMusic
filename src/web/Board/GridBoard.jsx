import React from 'react';
import { Grid, Box } from '../components';

function GridBoard() {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <Box bg="tomato" color="white" h={2} />
        <Box bg="tomato" color="white" h={2} />
        <Box bg="tomato" color="white" h={2} />
        <Box bg="tomato" color="white" h={2} />
        <Box bg="tomato" color="white" h={2} />
      </Grid>
    </>
  );
}

export default GridBoard;
