import React from 'react'
import { ContainerNav, NavDiv, Link } from '../navbar/styles'

function Register() {
  return (
    <div>
      <NavDiv>
      <ContainerNav>
      <Link href="#">
      <img src="/restaurant-svgrepo-com.svg" alt=""width="70" height="40"/>
      </Link>
      <Link href="/">Inicio</Link>
      <Link href="/booking">Haz una reserva</Link>
      <Link href="/Profile">Actualizar datos</Link>
      <Link href="/contact">Contactanos</Link>
      </ContainerNav>
    </NavDiv>
    </div>
  )
}

export default Register
