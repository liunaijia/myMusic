import React from 'react';
import { string, node, oneOf } from 'prop-types';
import styled from 'styled-components';
import { classNames } from '../util';

const Icon = ({
  className, children, size,
  ...props
}) => (
  <i
    className={classNames('material-icons', className)}
    {...props}
  >
    {children}
  </i>
);

Icon.propTypes = {
  className: string,
  children: node,
  size: oneOf([1, 2, 3]),
};

Icon.defaultProps = {
  className: '',
  children: null,
  size: 1,
};

export default styled(Icon)`
  font-size: ${props => `var(--size-${props.size})`};
`;
