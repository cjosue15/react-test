import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [roomName, setRoomName] = useState(null);

  const handleNameChange = ({ target: { value } }) => {
    setRoomName(value);
  };

  return (
    <div className='home-container'>
      <input type='text' placeholder='Room' value={roomName} />
    </div>
  );
};
