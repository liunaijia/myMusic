import React from 'react';
import { Typography, Grid } from '../components';

function TypographyBoard() {
  const shortText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur';

  const longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, '
  + 'quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? '
  + 'Eum quasi quidem quibusdam.';
  return (
    <Grid gap={1}>
      <Typography scale="h1">h1. Heading</Typography>
      <Typography scale="h2">h2. Heading</Typography>
      <Typography scale="h3">h3. Heading</Typography>
      <Typography scale="h4">h4. Heading</Typography>
      <Typography scale="h5">h5. Heading</Typography>
      <Typography scale="h6">h6. Heading</Typography>
      <Typography scale="subtitle1">
        Subtitle1.
        {shortText}
      </Typography>
      <Typography scale="subtitle2">
        Subtitle2.
        {shortText}
      </Typography>
      <Typography scale="body1">
        Body 1.
        {longText}
      </Typography>
      <Typography scale="body2">
        Body 2.
        {longText}
      </Typography>
      <Typography scale="button">Button</Typography>
      <Typography scale="caption">Caption</Typography>
      <Typography scale="overline">Overline</Typography>
    </Grid>
  );
}

export default TypographyBoard;
