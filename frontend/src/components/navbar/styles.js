import styled from "styled-components";

export const NavDiv = styled.nav`
transition: all .3s ease-out 0s;
background-color: rgba(21,22,23,255);
backdrop-filter: blur(15px);
display: flex;
height: 3.5rem;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
z-index: 1;
width: 100%; 
margin: auto;
top: 0;
border-bottom: solid 1px var(--primary-color);
opacity: 0.9;

position: fixed;
top: 0;
`
export const ContainerNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
`
export const Link = styled.a`
text-decoration: none;
color:white;
`
