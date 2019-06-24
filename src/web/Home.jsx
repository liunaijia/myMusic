import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';
import { Avatar } from './components';

function Home() {
  const { login } = useContext(StoreContext);
  if (!login.selectors.isLoggedIn()) {
    return (<Redirect to="/login" />);
  }
  const profile = login.selectors.profile();

  return (
    <main>
      {profile.userId}
      {profile.nickname}
      <Avatar src={profile.avatarUrl} />
    </main>
  );
}

export default Home;
