import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/Home';
import Profile from './components/profile';
import Mainrouter from './Mainrouter'

function App() {
  return (
    <BrowserRouter>
        <Mainrouter />

    </BrowserRouter>


  );
}

export default App;
