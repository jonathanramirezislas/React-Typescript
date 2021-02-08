import React from 'react';
import { Counter } from './components/Counter';
import { User } from './components/User';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>Hi!!</h2>

      <Counter/>
      <User/>
    </>
  );
}

export default App;