import React from 'react';

import Routes from './routes';
import Favicon from 'react-favicon';
import Logo from './assets/software.png';


function App() {
  return (
    <>
    
      <Favicon url={Logo}/>
      <Routes />
    </>
  );
}

export default App;
