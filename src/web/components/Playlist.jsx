import React, { useEffect, useContext } from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import { StoreContext } from '../context';
import Track from './Track';

function Playlist({ id, name, className }) {
  const { playlist } = useContext(StoreContext);

  useEffect(() => {
    if (id) {
      playlist.dispatch.getDetails(id);
    }
  }, [id]);

  const tracks = playlist.selectors.tracks();
  return (
    <section className={className}>
      <h4>{name}</h4>
      <ul>
        {tracks.map((track) => {
          const artist = track.ar.map(item => item.name).join(' ');
          const album = track.al;
          return (
            <li key={track.id}>
              <Track id={track.id} name={track.name} artist={artist} album={album} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Playlist.propTypes = {
  id: number,
  name: string,
  className: string,
};

Playlist.defaultProps = {
  id: null,
  name: null,
  className: null,
};

export default styled(Playlist)`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    > li + li {
      margin-top: 1rem;
    }
  }
`;
