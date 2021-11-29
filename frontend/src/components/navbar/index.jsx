import { ContainerNav, NavDiv, Link} from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "../../App";
import Hero from "../Hero";
import Home from "../Home";

const NavContainer = () =>{
  return(

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

  );
}

export default NavContainer