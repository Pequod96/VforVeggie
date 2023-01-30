import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${`04b78cc6f53e4777b1e11eabe7d217a4`}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect (() => {
        getSearched(params.search);
    }, [params.search]);

    return <Grid>
      {searchedRecipes.map((item) => {
        return(
            <Card key={item.id}>
             <Link to={'/recipe/'+ item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
             </Link>
            </Card>
        )
      }
      )}
    </Grid>
}

const Grid = styled.div`
display: grid;
margin: 3rem 3rem;
grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
grid-gap: 3rem;
@media only screen and (min-width: 390px) and (max-width: 480px){
    margin: 8rem 1rem;
    grid-gap: 3rem;
}
`;

const Card = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
    color:rgb(8, 28, 21)
}
@media only screen and (min-width: 390px) and (max-width: 480px){
    img{
    width: 100%;
    border-radius: 7rem;
}
}
`;

export default Searched;
