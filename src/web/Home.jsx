import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { StoreContext } from './context';

function Home() {
  const { count, user } = useContext(StoreContext);
  if (!user.selectors.isLoggedIn()) {
    return (<Redirect to="/login" />);
  }

  return (
    <main>
      Count:
      {count.state}
      <button onClick={() => count.dispatch({ type: 'increment', payload: 2 })}>Inc</button>
      <button onClick={() => count.dispatch.increment(3)}>+3</button>
      <button onClick={() => count.dispatch.incrementAsync(3)}>+3 async</button>
      <h1>Nothing yet.</h1>
      Status:
      {user.selectors.isLoggedIn() ? 'yes' : 'no'}
    </main>
  );
}

export default Home;
