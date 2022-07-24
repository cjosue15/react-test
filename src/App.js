import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChatRoom } from './components/ChatRoom';
import { Home } from './components/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
