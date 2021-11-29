import { ImageCarousel, TextCarousel, Title } from "./styles"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LogInButton from "../LoginButton";


const Hero = () => {
        return (
          <>
            <Carousel autoPlay="true" infiniteLoop="true" showThumbs="">
                <ImageCarousel>
                    <TextCarousel>Registrate Ahora!</TextCarousel>
                    <TextCarousel style={{top:"50%"}}>
                        <LogInButton/>
                    </TextCarousel>
                    <img src="group-women-friends-cafe-are-looking-laptop.jpg"  />
                </ImageCarousel>
                <ImageCarousel>
                    <TextCarousel>Reservas en un click</TextCarousel>
                    <img src="medium-closeup-young-asian-couple-discussing-upcoming-trip-europe.jpg" />
                </ImageCarousel>
                <ImageCarousel>
                    <TextCarousel>Tu mejor opción</TextCarousel>
                    <img src="smiling-young-man-working-computer-cozy-cafe-bar-restaurant.jpg" />
                </ImageCarousel>
            </Carousel>
            <ImageCarousel>
            <TextCarousel style={{color:"black", width:"100%", top:"30%"}} >
            <img style={{marginBottom:"50px", marginTop:"50px"}} src="logo_size_invert (2).png"/>
            <br/>
                Somos TheBooking, una compañia dedicada a que tengas la mejor experiencia obteniendo tus reservas al mejor precio y rapidamente.
            </TextCarousel>
            <img src="abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products-plain-studio-background.jpg" width="100%"/>
            </ImageCarousel>
            </>
        );
    }
export default Hero