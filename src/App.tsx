import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ListPage from './Pages/List';

function App() {
  return (
    <div id="app">
      <div className='header'>
        <Navbar />
      </div>
      <ListPage />
    </div>
  );
}

export default App;
