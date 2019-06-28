import React from 'react';
import { string, oneOf } from 'prop-types';
import styled from 'styled-components';

function Avatar({ src, className }) {
  return (
    <span className={className} style={{ '--background-image': `url(${src})` }} />
  );
}

Avatar.propTypes = {
  src: string,
  className: string,
  shape: oneOf(['circle', 'square']),
};

Avatar.defaultProps = {
  src: '',
  className: '',
  shape: 'circle',
};

// use css variable to reduce css classes generated
export default styled(Avatar)`
  display: inline-block;
  height: var(--size-3);
  width: var(--size-3);
  background-size: cover;
  background-position: center;
  background-image: var(--background-image);
  ${props => props.shape !== 'square' // it doesn't honer prop default value, can't use shape === 'circle'
  && `
    border-radius: 50%;
  `}
`;
