import React from 'react'
import { ContainerNav, NavDiv, Link } from '../navbar/styles';
import { Navigate } from 'react-router-dom';
import NavContainer from '../navbar';
import Booking from '../Booking';

function AuthBooking() {
  var contentHome = <Navigate to="/" />
  if(localStorage.getItem('data') != undefined){
    contentHome = <Booking/>
  }
  return (
    <div>
      {contentHome}
      <NavContainer/>
    </div>
  )
}
export default AuthBooking
