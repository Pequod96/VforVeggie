import { useEffect, useState} from 'react'
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import React from 'react';
import carrots from '../images/carrots.ico';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('Instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${`04b78cc6f53e4777b1e11eabe7d217a4`}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return ( 
  <DetailWrapper>
    <div>
        <h2>{details.title}<img className='carrots' src={carrots} alt="" /></h2>
        <img src={details.image} alt="" />
    </div>
    <Info>
        <Button
        className={activeTab === 'Instruction' ? 'active' : ''}
        onClick={() => setActiveTab('Instructions')}>Instructions
        </Button>
        <Button
        className={activeTab === 'Ingredients' ? 'active' : ''}
        onClick={() => setActiveTab('Ingredients')}>Ingredients
        </Button>
        {activeTab === "Instructions" && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )}
        {activeTab === "Ingredients" && (
            <ul>
            {details.extendedIngredients.map((ingredient) => 
            <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>
        )};
    </Info>
  </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
margin-top: 5rem;
margin-bottom: 2rem;
display: flex;
background-color: rgba(88, 140, 126, 0.7);
.active{
    background: #F57D22;
    color: white;
}
h2{
    margin: 3rem 2rem 1rem 3rem;
    font-size: 1rem;
    color: white;
}
img{
    margin: 0rem 0rem 0rem 3rem;
    width: 15rem;
}
.carrots{
    width: 1.5rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.6rem;
    line-height: 1rem;
    color: white;
}
li{
   font-size: 0.7rem;
   line-height: 1rem;
   color: white;
}
ul{
    margin-top: 2rem;
}
@media only screen and (min-width: 320px) and (max-width: 375px){
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    margin-right: 1rem;
    margin-left: 1rem;
h2{
    margin: 5rem 2rem 1rem 2.5rem;
    font-size: o.8rem;
    letter-spacing: 1px;
    color: white;
    font-weight: 400;
}
img{
    margin: 0rem 0rem 0rem 2.5rem;
    width: 12rem;
    border-radius: 3rem;
}
.carrots{
    width: 1.9rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.8rem;
    line-height: 2rem;
    color: white;
    font-weight: 400;
    margin-right: 1rem;
}
li{
   font-size: 0.8rem;
   line-height: 1rem;
   color: white;
   font-weight: 400;
}
ul{
    margin-top: 2rem;
} 
}
@media only screen and (min-width: 390px) and (max-width: 480px){
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    margin-right: 1rem;
    margin-left: 1rem;
h2{
    margin: 5rem 2rem 1rem 4rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: white;
    font-weight: 400;
}
img{
    margin: 0rem 0rem 0rem 3.5rem;
    width: 15rem;
    border-radius: 3rem;
}
.carrots{
    width: 1.9rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.8rem;
    line-height: 2rem;
    color: white;
    font-weight: 400;
    margin-right: 3rem;
}
li{
   font-size: 0.8rem;
   line-height: 1.2rem;
   color: white;
   margin-right: 0rem;
}
ul{
    margin-top: 2rem;
}
}
@media only screen and (min-width: 768px){
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    margin-right: 1rem;
    margin-left: 1rem;
h2{
    margin: 3rem 2rem 1rem 9rem;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    color: white;
    font-weight: 400;
}
img{
    margin: 0rem 0rem 0rem 8.5rem;
    width: 30rem;
    border-radius: 3rem;
}
.carrots{
    width: 1.9rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 1rem;
    line-height: 2rem;
    color: white;
    font-weight: 400;
    margin-right: 7rem;
}
li{
   font-size: 1rem;
   line-height: 1.2rem;
   color: white;
}
ul{
    margin-top: 2rem;
}
}
@media only screen and (min-width: 1024px){
    margin-top: 3rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    border-radius: 5rem;
    padding-top: 3rem;
    display: flex;
h2{
    margin-left: 4rem;
    letter-spacing: 1.5px;
    color: white;
    font-weight: 400;
}
img{
    margin-left: 3rem;
    width: 25rem;
    border-radius: 3rem;
}
.carrots{
    width: 3rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 1rem;
    line-height: 2rem;
    color: white;
    font-weight: 400;
}
li{
   font-size: 1rem;
   line-height: 2rem;
   color: white;
   font-weight: 500;
}
ul{
    margin-top: 2rem;
    margin-bottom: 10rem;
}
}
@media only screen and (min-width: 1200px){
    margin-top: 3rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    border-radius: 5rem;
    padding-top: 3rem;
    display: flex;
h2{
    margin-left: 6rem;
    letter-spacing: 1.5px;
    color: white;
    font-weight: 400;
}
img{
    margin-left: 5rem;
    width: 30rem;
    border-radius: 3rem;
}
.carrots{
    width: 3rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 1rem;
    line-height: 2rem;
    color: white;
    font-weight: 400;
}
li{
   font-size: 1rem;
   line-height: 2rem;
   color: white;
   font-weight: 500;
}
ul{
    margin-top: 2rem;
    margin-bottom: 10rem;
}
}
`;

const Button = styled.button`
width: 6rem;
height: 2rem;
color: white;
background: rgb(8, 28, 21);
border: none;
border-radius: 3rem;
margin: 0rem 1rem;
font-weight: 600;
transition-duration: 0.4s;
:hover{
    background-color: #F57D22;
    color: white;
}
@media only screen and (min-width: 320px) and (max-width: 375px){
    width: 6rem;
    height: 2rem;
    color: white;
    margin: 0rem 1rem 0rem 0rem;
    font-weight: 400;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
    width: 5.5rem;
    height: 2rem;
    color: white;
    margin: 2rem 1rem 0rem 0rem;
    font-weight: 500;
    font-size: 0.6rem;
    letter-spacing: 1px;
}
@media only screen and (min-width: 768px){
    width: 8rem;
    height: 2.5rem;
    margin: 0rem 1rem 0rem 0rem;
    font-weight: 500;
    letter-spacing: 1px;
}
@media only screen and (min-width: 1024px){
    margin: 0rem 1.5rem 0rem 0rem;
    font-weight: 500;
    width: 7.5rem;
    height: 2.5rem;
    color: white;
    letter-spacing: 1px;
}
@media only screen and (min-width: 1200px){
    margin: 0rem 2rem;
    font-weight: 500;
    width: 8rem;
    height: 3rem;
    color: white;
    letter-spacing: 1px;
}
`
const Info = styled.div`
margin: 20rem 0rem 0rem -14rem;
@media only screen and (min-width: 390px) and (max-width: 480px){
    margin: 20rem 0rem 0rem -15rem;
}
@media only screen and (min-width: 768px){
    margin: 33rem 0rem 0rem -29rem;
}
@media only screen and (min-width: 1024px){
    margin: 4rem 2rem 4rem 2rem;
}
@media only screen and (min-width: 1200px){
    margin: 1.5rem 4rem 3rem 5rem;
}
`;

export default Recipe;
