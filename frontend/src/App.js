import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Register from './components/register';
import NotFound from './components/NotFound';
import AuthBooking from './components/redirectbooking';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="*" element={<NotFound/>}/>
       <Route path="/Booking" element={<AuthBooking/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
