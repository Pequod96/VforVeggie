import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import vegetables from './images/526-paper-bag-vegetables-lineal.gif'

function App() {
  return (
       <div className="App">
       <Nav>
        <Logo to={'/VforVeggie'}>V FOR VEGGIE</Logo>
        <Search /> 
        <img src={vegetables} alt="" />
       </Nav>
         <Pages />
         <Footer> Samuele Toro <span>&#174;</span></Footer>
       </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.8rem;
font-weight: 600;
font-family: 'Montserrat';
color: #96e6a1;
text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
@media only screen and (min-width: 390px) and (max-width: 480px){
 font-size: 1.8rem;
}
@media only screen and (min-width: 768px){
 font-size: 1.8rem;
 padding-left: 4rem;
}
@media only screen and (min-width: 1024px){
  font-size: 3rem;
  padding-left: 4rem;
}
@media only screen and (min-width: 1200px){
  font-size: 3rem;
  padding-left: 7rem;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
`;

const Nav = styled.div`
padding: 1rem 1rem 1rem;
height: 4rem;
background-color: white;
img{
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.7rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  height: 4rem;
  img{
    right: 1rem;
    width: 2.7rem;
  }
}
@media only screen and (min-width: 768px){
  height: 4rem;
  img{
    right: 1rem;
    width: 2.9rem;
  }
}
@media only screen and (min-width: 1024px){
  height: 6rem;
  img{
    right: 0.5rem;
    width: 4rem;
  }
}
@media only screen and (min-width: 1200px){
  height: 6rem;
  img{
    right: 2rem;
    width: 4rem;
}
}
`;

const Footer = styled.footer`
padding: 0rem 0rem 3rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.8rem;
font-weight: 600;
color: rgb(8, 28, 21);
@media only screen and (min-width: 390px) and (max-width: 480px){
  padding: 0rem 0rem 3rem;
  font-size: 0.8rem;
  font-weight: 600;
}
@media only screen and (min-width: 768px){
  padding: 0rem 0rem 3rem;
  font-size: 0.8rem;
  font-weight: 600;
}
`;


export default App;
