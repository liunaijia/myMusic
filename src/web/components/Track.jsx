import React, { useContext } from 'react';
import {
  number, string, shape,
} from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';
import Icon from './Icon';
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
  const { player } = useContext(StoreContext);

  function handleAvatarClick() {
    player.dispatch.play(id);
  }

  return (
    <div className={className}>
      <div className="avatar" onClick={handleAvatarClick}>
        <Icon className="icon" size={2}>play_arrow</Icon>
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
  album: {},
};

export default styled(Track)`
  display: flex;
  align-items: center;

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    position: relative;

    .icon {
      position: absolute;
      display: none;      
    }

    &:hover {
      filter: brightness(60%);
      .icon {
        display: initial;
        color: var(--primary-bg-color);
      }
    }
  }

  > div:nth-child(2) {
    margin-left: var(--size-1);
    flex: 1;
  }
`;
