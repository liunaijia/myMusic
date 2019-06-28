import React, { useContext, useEffect, useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { StoreContext } from '../context';

function Player({ className }) {
  const { player, song } = useContext(StoreContext);
  const [state, setState] = useState({});

  const songId = player.selectors.get();

  useEffect(() => {
    const songInfo = song.selectors.get(songId);
    if (songInfo) {
      setState(songInfo);
    } else {
      song.dispatch.getUrl(songId);
    }
  });

  return (
    <audio controls src={state.url} autoPlay className={className} />
  );
}

Player.propTypes = {
  className: string,
};

Player.defaultProps = {
  className: null,
};

export default styled(Player)`
  position: fixed;
  bottom: 0;
`;
