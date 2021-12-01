import React, { useState } from 'react'
import { ContainerNav, NavDiv, Link } from '../navbar/styles';
import { getCrudBookings } from '../../apis/TheBookingCRUD';
import { ImageCarousel, TextCarousel } from '../Hero/styles';
import { RestauSelectText } from './styles';

function Booking() {

  getCrudBookings((res) => {
    console.log(res);
  })

  return (
    <div>
      <ContainerNav />
      <ImageCarousel>
        <RestauSelectText>
          ¿En que restaurante deseas comer?
        </RestauSelectText>
        <img style={{ width: "100%", height: "100vh" }} src="abstract-blur-food-truck.jpg" />
      </ImageCarousel>
    </div>
  )
}

export default Booking
