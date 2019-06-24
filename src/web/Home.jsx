import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';

function Home() {
  const { user } = useContext(StoreContext);
  if (!user.selectors.isLoggedIn()) {
    return (<Redirect to="/login" />);
  }
  const profile = user.selectors.profile();

  return (
    <main>
      {profile.userId}
      {profile.nickname}
      <img src={profile.avatarUrl} alt="avatar" />
    </main>
  );
}

export default Home;
