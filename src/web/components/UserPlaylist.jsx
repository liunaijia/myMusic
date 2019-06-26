import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import Playlist from './Playlist';
import useUserPlaylist from './useUserPlaylist';

function UserPlaylist({ className, userId }) {
  const playlist = useUserPlaylist(userId);

  return (
    <div className={className}>
      {playlist.map(item => <Playlist key={item.id} id={item.id} name={item.name} />)}
    </div>
  );
}

UserPlaylist.propTypes = {
  userId: number,
  className: string,
};

UserPlaylist.defaultProps = {
  userId: null,
  className: null,
};

export default styled(UserPlaylist)`
  
`;
