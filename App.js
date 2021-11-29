import React from 'react';

import ValueProvider from './components/ValueContext';

import Nav from './components/Nav';

const App = () => {
  const data = {
    name: "",
    email: "",
    appUrl: 'http://127.0.0.1:3000',
    secret: "",
  }
  return (
    <ValueProvider>
      <Nav />
    </ValueProvider>
  )
}

export default App;


