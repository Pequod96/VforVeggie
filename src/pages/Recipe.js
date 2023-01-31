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
margin-bottom: 5rem;
display: flex;
.active{
    background: rgb(82, 182, 154);
    color: white;
}
h2{
    margin: 0rem 2rem 2rem;
    color: rgb(8, 28, 21)
}
img{
    margin: 0rem 0rem 0rem 2rem;
}
.carrots{
    width: 2.5rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 1rem;
    color: rgb(8, 28, 21)
}
li{
   font-size: 1.2rem;
   line-height: 2.5rem;
   color: rgb(8, 28, 21)
}
ul{
    margin-top: 2rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: flex;
h2{
    margin: 3rem 2rem 1rem 3rem;
    font-size: 1rem;
}
img{
    margin: 0rem 0rem 0rem 3rem;
    width:15rem;
}
.carrots{
    width: 1.5rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.6rem;
    margin-right: 2rem;
    line-height: 1rem;
}
li{
   font-size: 0.7rem;
   line-height: 1rem;
}
ul{
    margin-top: 2rem;
}
}
@media only screen and (min-width: 768px){
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
h2{
    margin: 3rem 2rem 1rem 8rem;
    font-size: 1.5rem;
}
img{
    margin: 0rem 0rem 0rem 8rem;
    width: 30rem;
}
.carrots{
    width: 1.9rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.9rem;
    margin-right: 8rem;
    line-height: 1.4rem;
}
li{
   font-size: 1rem;
   line-height: 1.2rem;
}
ul{
    margin-top: 2rem;
}
}
@media only screen and (min-width: 1024px){
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
h2{
    margin: 0rem 2rem 2rem;
    font-size: 1.5rem;
}
img{
    margin: 0rem 0rem 0rem 2rem;
    width: 30rem;
}
.carrots{
    width: 1.9rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 0.9rem;
    margin-right: 8rem;
    line-height: 1.4rem;
}
li{
   font-size: 1rem;
   line-height: 1.2rem;
}
ul{
    margin-top: 2rem;
}
}
@media only screen and (min-width: 1200px){
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
h2{
    margin: 0rem 2rem 2rem;
}
img{
    margin: 0rem 0rem 0rem 2rem;
}
.carrots{
    width: 2.5rem;
    margin: 0rem 0rem;
}
h3{
    font-size: 1rem;
    line-height: 2rem;
}
li{
   font-size: 1.2rem;
   line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
}
`;

const Button = styled.button`
width: 8rem;
height: 2rem;
color: white;
background: rgb(8, 28, 21);
border: 2px solid black;
margin: 0rem 2rem;
font-weight: 600;
@media only screen and (min-width: 390px) and (max-width: 480px){
    width: 6rem;
    height: 2rem;
    color: white;
    border: 2px solid black;
    margin: 0rem 1rem 0rem 0rem;
    font-weight: 600;
}
@media only screen and (min-width: 768px){
    width: 8rem;
    height: 2rem;
    margin: 0rem 1rem 0rem 0rem;
    font-weight: 600;
}
@media only screen and (min-width: 1024px){
    margin: 0rem 2rem 0rem 0rem;
}
@media only screen and (min-width: 1200px){
    margin: 0rem 2rem;
    font-weight: 600;
}
`
const Info = styled.div`
margin: 0rem 1rem 1rem 5rem;
@media only screen and (min-width: 390px) and (max-width: 480px){
    margin: 20rem 0rem 0rem -14rem;
}
@media only screen and (min-width: 768px){
    margin: 33rem 0rem 0rem -29rem;
}
@media only screen and (min-width: 1024px){
    margin: 4rem 1rem 1rem 5rem;
}
@media only screen and (min-width: 1200px){
    margin: 0rem 1rem 1rem 5rem;
}
`;

export default Recipe;
