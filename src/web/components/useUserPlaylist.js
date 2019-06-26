import { useContext, useEffect } from 'react';
import { StoreContext } from '../context';

function useUserPlaylist(userId) {
  const { user } = useContext(StoreContext);

  useEffect(() => {
    if (userId) {
      user.dispatch.getPlaylist(userId);
    }
  }, [userId]);

  return user.selectors.playlist();
}

export default useUserPlaylist;
