import React from 'react';
import {
  node, elementType, string,
} from 'prop-types';
import styled from 'styled-components';
import { omit } from '../util';

const classNames = {
  color: 'color',
  bg: 'background-color',
  p: 'padding',
  h: 'height',
};

function Box({
  children, as, className, ...props
}) {
  const nonClassProps = omit(props, Object.keys(classNames));
  return React.createElement(as, { ...nonClassProps, className }, children);
}

Box.propTypes = {
  children: node,
  as: elementType,
  className: string,
};

Box.defaultProps = {
  children: undefined,
  as: 'div',
  className: undefined,
};

export default styled(Box)`
  ${({ bg }) => bg !== undefined && `background-color: ${bg};`}
  ${({ color }) => color !== undefined && `color: ${color};`}
  ${({ p }) => p !== undefined && `padding: calc(var(--size-unit) * ${p});`}
  ${({ h }) => h !== undefined && `height: calc(var(--size-unit) * ${h});`}
`;
