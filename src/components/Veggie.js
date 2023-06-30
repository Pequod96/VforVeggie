import { useEffect, useState} from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import carrots from '../images/carrots.ico';

function Veggie() {
  const [veggie, setVeggie] = useState([]);
 useEffect(() => {
    getVeggie()
 }, []);


  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${`04b78cc6f53e4777b1e11eabe7d217a4`}&number=9&tags=vegetarian`);
    const data = await api.json();
    setVeggie(data.recipes);
  };

  return (
    <div>
        <Wrapper>
          <h3 id="veggiefood"><span class="colored-letter">V</span>eggie Food <img className='carrots' src={carrots} alt="" /></h3>
          <Splide options={{
            perPage: 1,
            arrows: true,
            pagination:false,
            drag: 'free',
            gap:'2rem',
            mediaQuery: 'min',
            breakpoints: {
		        480: {
			      perPage: 1,
		        },
            768: {
              perPage: 3,
            },
            1024: {
              perPage:4,
            },
            1200: {
              perPage: 4,
            }
           }      
          }} >
          {veggie.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
               <Card>
               <Link to={"/recipe/"+ recipe.id}>
                 <p>{recipe.title}</p>
                 <img src={recipe.image} alt={recipe.title} />
                 <Gradient />
                </Link>
               </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
    </div>
  )
 };

 
const Wrapper = styled.div`
  margin:16rem 2rem;
  h3{
    margin-left: 1rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  .colored-letter{
    color: #d4fc79;
    text-shadow: -1px 0 rgb(8, 28, 21), 0 1px rgb(8, 28, 21), 1px 0 rgb(8, 28, 21), 0 -1px rgb(8, 28, 21);
  }
  .carrots{
    width: 1.5rem;
  }
  @media only screen and (min-width: 375px) and (max-width: 480px){
    margin:5rem 2rem;
  h3{
    margin-left:1rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .carrots{
    width: 1.5rem;
  }
  }
  @media only screen and (min-width: 768px){
    margin:6rem 2rem;
  h3{
    margin-left: 1rem;
    font-size: 1.5rem;
    text-align: left;
  }
  .carrots{
    width: 1.8rem;
  }
  }
  @media only screen and (min-width: 1024px){
    margin:9rem 2rem;
  h3{
    margin-left:1rem;
    font-size: 1.5rem;
  }
  .carrots{
    width: 1.8rem;
  }
  }
  @media only screen and (min-width: 1200px){
    margin:8rem 2rem;
  h3{
    margin-left:2rem;
    font-size: 2rem;
  }
  .carrots{
    width: 2.5rem;
  }
  }
`;

const Card = styled.div`
  min-height: 22rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 3.5rem;
  overflow: hidden;
  position: relative;
  perspective: 900px;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
img{
  border-radius: 3rem;
  position: absolute;
  left:0rem;
  width: 100%;
  object-fit: cover;
  box-shadow: 6px 8px 6px gray;
}
p{
  position: absolute;
  z-index:11;
  left: 50%;
  bottom:0%;
  transform: translate(-50%, 0%);
  color: rgb(8, 28, 21);
  width:100%;
  text-align: center;
  font-weight: 600;
  font-size:0,1rem;
  text-shadow: -1px 0 #fcfcfc, 0 1px #fcfcfc, 1px 0 #fcfcfc, 0 -1px #fcfcfc;
  height:60%;
  display:flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 375px) and (max-width: 480px){
  min-height: 12rem;
img{
  border-radius: 3rem;
  height: 90%;
}
p{
  width:100%;
  font-weight: 600;
  font-size:0,1rem;
  height:60%;
}
}
@media only screen and (min-width: 768px){
  min-height: 15rem;
img{
  border-radius: 3rem;
  height: 90%;
}
p{
  width:100%;
  font-weight: 600;
  font-size:0,1rem;
  height:60%;
}
}
@media only screen and (min-width: 1024px){
  min-height: 15rem;
img{
  border-radius: 3rem;
  height: 90%;
}
p{
  width:100%;
  font-weight: 600;
  font-size:0,1rem;
  height:60%;
}
}
@media only screen and (min-width: 1200px){
  min-height: 22rem;
img{
  border-radius: 2rem;
  height: 90%;
}
p{
  width:50%;
  font-weight: 600;
  font-size:0,5rem;
  height:50%;
}
}
`;

const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width:100%;
  height: 100%;
`;

export default Veggie;
