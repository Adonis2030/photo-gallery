import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ListPage from './Pages/List';

function App() {
  return (
    <Router>
      <div id="app">
        <div className='header'>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
