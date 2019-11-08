import React from 'react';
import { string, node, number } from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

function Grid({ children, ...props }) {
  return (
    <Box {...props}>{children}</Box>
  );
}

Grid.propTypes = {
  children: node,
  templateColumns: string,
  gap: number,
};

Grid.defaultProps = {
  children: undefined,
  templateColumns: undefined,
  gap: undefined,
};

export default styled(Grid)`
  display: grid;
  ${({ templateColumns }) => templateColumns !== undefined && `grid-template-columns: ${templateColumns};`}
  ${({ gap }) => gap !== undefined && `gap: calc(var(--size-unit) * ${gap});`}
`;
