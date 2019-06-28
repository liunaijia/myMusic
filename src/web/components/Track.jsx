import React, { useEffect, useContext } from 'react';
import { number, string, shape } from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';
import { StoreContext } from '../context';

const Title = styled.span`
  display: block;
`;

const Artist = styled.span`
  color: var(--secondary-color);
  font-size: var(--size-80p);
  &:after {
    content: ' · ';
    ont-weight: bold;
  }
`;

const Album = styled.span`
  color: var(--secondary-color);
  font-size: var(--size-80p);
`;

function Track({
  id, name, artist, album, className,
}) {
  // const { Track } = useContext(StoreContext);

  // useEffect(() => {
  //   if (id) {
  //     Track.dispatch.getDetails(id);
  //   }
  // }, [id]);

  // const tracks = Track.selectors.tracks();

  return (
    <div className={className}>
      <div className="avatar">
        <Avatar src={album.picUrl} shape="square" />
      </div>
      <div>
        <Title>{name}</Title>
        <Artist>{artist}</Artist>
        <Album>{album.name}</Album>
      </div>
    </div>
  );
}

Track.propTypes = {
  className: string,
  id: number,
  name: string,
  artist: string,
  album: shape({
    name: string,
    picUrl: string,
  }),
};

Track.defaultProps = {
  className: null,
  id: null,
  name: null,
  artist: null,
  album: {
  },
};

export default styled(Track)`
  display: flex;
  align-items: center;

  .avatar {
    font-size: 0;

    &:hover {

    }
  }

  > div:nth-child(2) {
    margin-left: var(--size-1);
    flex: 1;
  }
`;
