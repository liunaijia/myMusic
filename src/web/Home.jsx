import React, { useContext } from 'react';
import { StoreContext } from './context';

function Home() {
  const [state, dispatch] = useContext(StoreContext).count;
  return (
    <main>
      Count:
      {state}
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>Inc</button>
      <button onClick={() => dispatch.increment(3)}>+3</button>
      <button onClick={() => dispatch.incrementAsync(3)}>+3 async</button>
      <h1>Nothing yet.</h1>
    </main>
  );
}

export default Home;
