import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Avatar({ className }) {
  return (
    <span className={className} />
  );
}

Avatar.propTypes = {
  className: string,
};

Avatar.defaultProps = {
  className: '',
};

export default styled(Avatar)`
  display: inline-block;
  height: 64px;
  width: 64px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-image: url(${props => props.src});
`;
