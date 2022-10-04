import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './components/input';
import OneBook from './components/oneBook';

function App() {
  return (
    <div className="App">
      <h2 className="font-monospace">Каталог книг</h2>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:id" element={<OneBook />} />
      </Routes>
    </div>
  );
}

export default App;
