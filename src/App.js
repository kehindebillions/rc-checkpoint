import React from 'react';

import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePicture from './Components/Profile/ProfilePicture';
import './App.css';

function App() {
  return (
    <div className="container">
      <FullName />
      <Address/>
      <ProfilePicture />
    </div>
  );
}

export default App;
