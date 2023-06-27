import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };


  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
         <FaSearch></FaSearch>
         <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='search food...' value={input} />
     </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
margin: 3rem 3rem 3rem 3rem;
div{
    width: 100%;
    position: relative;
}
input{
    border: 2px solid rgb(8, 28, 21);
    background: white;
    font-size: 0.7rem;
    color: rgb(8, 28, 21);
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    font-weight:500;
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color:rgb(8, 28, 21);
}
@media only screen and (min-width: 320px) and (max-width: 375px){
  margin: 3rem 3rem 3rem 3rem;
  input{
    font-size: 0.6rem;
}
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  margin: 3rem 3rem 3rem 3rem;
  input{
    font-size: 0.7rem;
}
}
@media only screen and (min-width: 768px){
  margin: -2.7rem 4rem 0rem 25rem;
  input{
    font-size: 0.7rem;
}
}
@media only screen and (min-width: 1024px){
  margin: -3.5rem 4rem 5rem 35rem;
  input{
    font-size: 0.9rem;
}
}
@media only screen and (min-width: 1200px){
  margin: -3.7rem 6rem 0rem 50rem;
  input{
    font-size: 1.2rem;
  }
}
`;

export default Search;
