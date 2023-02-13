import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './CreateUser/CreateUser';
import './index.css'
import UserDetails from './UserDetails/UserDetails';
function App() {
  return (
   <div>
    <Routes>
        <Route path="/" element={ <UserDetails/> }/>
        <Route path="/adduser" element={ <CreateUser/> } />
    </Routes>
   </div>
  );
}

export default App;
