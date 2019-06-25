import React, { useContext, useEffect } from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import { StoreContext } from '../context';
import Playlist from './Playlist';

function UserPlaylist({ className, userId }) {
  const { user } = useContext(StoreContext);

  useEffect(() => {
    if (userId) {
      user.dispatch.getPlaylist(userId);
    }
  }, [userId]);

  const playlist = user.selectors.playlist();
  return playlist.map(item => <Playlist key={item.id} id={item.id} name={item.name} />);
}

UserPlaylist.propTypes = {
  userId: number,
};

UserPlaylist.defaultProps = {
  userId: null,
};

export default styled(UserPlaylist)`
  
`;
