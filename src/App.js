import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

function App () {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
