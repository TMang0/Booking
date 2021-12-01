import React from 'react'
import { ContainerNav, NavDiv, Link } from '../navbar/styles';
import { Navigate } from 'react-router-dom';
import NavContainer from '../navbar';
import Booking from '../Booking';
import Profile from '../Profile';

function AuthProfile() {
  var contentHome = <Navigate to="/" />
  if(localStorage.getItem('data') != undefined){
    contentHome = <Profile/>
  }
  return (
    <div>
      {contentHome}
      <NavContainer/>
    </div>
  )
}
export default AuthProfile
