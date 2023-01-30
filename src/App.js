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
font-size: 3rem;
font-weight: 600;
font-family: cursive;
color: #96e6a1;
padding: 2rem;
@media only screen and (min-width: 390px) and (max-width: 480px){
 font-size: 1.8rem;
 padding: 0rem;
}
@media only screen and (min-width: 768px){
 font-size: 1.8rem;
 padding: 0rem;
}
@media only screen and (min-width: 1024px){
  font-size: 3rem;
  padding: 0rem;
}
`;

const Nav = styled.div`
padding: 1rem 1rem 1rem;
height: 7rem;
background-color: white;
img{
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 4rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  height: 5rem;
  img{
    right: 1rem;
    width: 2.7rem;
  }
}
@media only screen and (min-width: 768px){
  height: 5rem;
  img{
    right: 1rem;
    width: 2.9rem;
  }
}
@media only screen and (min-width: 1024px){
  height: 7rem;
  img{
    right: 0.5rem;
    width: 4rem;
  }
}
`;

const Footer = styled.footer`
padding: 1rem 0rem 3rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
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
