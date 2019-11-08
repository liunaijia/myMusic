import React from 'react';
import { oneOf, node } from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

const scaleCategories = {
  h1: { weight: 'light', size: 96, spacing: -1.5 },
  h2: { weight: 'light', size: 60, spacing: -0.5 },
  h3: { weight: 'regular', size: 48, spacing: 0 },
  h4: { weight: 'regular', size: 34, spacing: 0.25 },
  h5: { weight: 'regular', size: 24, spacing: 0 },
  h6: { weight: 'medium', size: 20, spacing: 0.15 },
  subtitle1: {
    as: 'h6', weight: 'regular', size: 16, spacing: 0.15,
  },
  subtitle2: {
    as: 'h6', weight: 'medium', size: 14, spacing: 0.1,
  },
  body1: {
    as: 'p', weight: 'regular', size: 16, spacing: 0.5,
  },
  body2: {
    as: 'p', weight: 'regular', size: 14, spacing: 0.25,
  },
  button: {
    as: 'span', weight: 'medium', size: 14, spacing: 1.25, case: 'caps',
  },
  caption: {
    as: 'span', weight: 'regular', size: 12, spacing: 0.4,
  },
  overline: {
    as: 'span', weight: 'regular', size: 10, spacing: 1.5, case: 'caps',
  },
};

function Typography({
  scale, children, ...props
}) {
  const as = scaleCategories[scale].as || scale;
  return React.createElement(Box, { as, ...props }, children);
}

Typography.propTypes = {
  children: node,
  scale: oneOf(Object.keys(scaleCategories)),
};

Typography.defaultProps = {
  children: undefined,
  scale: 'body1',
};

export default styled(Typography)`
  margin: 0;
  line-height: 100%;
  ${({ scale }) => {
    const category = scaleCategories[scale];
    return `
      font-weight: var(--font-weight-${category.weight});
      font-size: calc(${category.size} / var(--rem-size) * var(--size-unit));
      letter-spacing: calc(${category.spacing} / var(--rem-size) * var(--size-unit));
      ${category.case ? 'text-transform: uppercase;' : ''}
    `;
  }
}
`;
