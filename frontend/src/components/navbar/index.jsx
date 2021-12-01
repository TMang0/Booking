import { ContainerNav, NavDiv, Link} from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "../../App";
import Hero from "../Hero";
import Home from "../Home";

const logOut = () => {
  localStorage.removeItem("data");
};

const NavContainer = () =>{
  return(

    <NavDiv>
      <ContainerNav>
      <Link href="#">
      <img src="/restaurant-svgrepo-com.svg" alt=""width="70" height="40"/>
      </Link>
      <Link href="/">Inicio</Link>
      <Link href="/Booking">Haz una reserva</Link>
      <Link href="/Profile">Perfil</Link>
      <Link href="/Contact">Contactanos</Link>
      </ContainerNav>
      <Link style={{marginRight:"30px"}} href="/" onClick={logOut}>LogOut</Link>
    </NavDiv>

  );
}

export default NavContainer