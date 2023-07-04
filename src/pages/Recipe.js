import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";
import carrots from "../images/carrots.ico";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${
        params.name
      }/information?apiKey=${`04b78cc6f53e4777b1e11eabe7d217a4`}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>
          {details.title}
          <img className="carrots" src={carrots} alt="" />
        </h2>
        <div className="div-img">
          <img src={details.image} alt="" />
        </div>
      </div>
      <Info>
        <div className="div-btn">
          <Button
            className={activeTab === "Instruction" ? "active" : ""}
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>
        </div>
        <div className="div-tab">
          {activeTab === "Instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === "Ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
          ;
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  background-color: rgba(88, 140, 126, 0.7);
  box-shadow: 6px 8px 6px #B36BBB;
  border-radius: 2rem;
  .active {
    background: #f57d22;
    color: white;
  }
  h2 {
    margin: 3rem 2rem 1rem 3rem;
    font-size: 1rem;
    color: rgb(8, 28, 21);
  }
  .div-img {
    width: 14.5rem;
    margin-left: 3.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    overflow: hidden;
      position: relative;
      perspective: 900px;
      transition: transform 0.3s ease;
      :hover {
        transform: scale(1.1);
      }
  }
  .carrots {
    width: 1.5rem;
    margin: 0rem 0rem;
  }
  h3 {
    font-size: 0.6rem;
    line-height: 1rem;
    color: rgb(8, 28, 21);
  }
  li {
    font-size: 0.7rem;
    line-height: 1rem;
    color: rgb(8, 28, 21);
  }
  ul {
    margin-top: 2rem;
  }
  @media only screen and (min-width: 375px) and (max-width: 480px) {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    h2 {
      margin: 5rem 2rem 1rem 4rem;
      font-size: 0.7rem;
      letter-spacing: 1px;
      font-weight: 500;
    }
    .div-img {
      width: 14.5rem;
      margin-left: 3.5rem;
    }
    .carrots {
      width: 1.9rem;
      margin: 0rem 0rem;
    }
    h3 {
      font-size: 0.8rem;
      line-height: 2rem;
      font-weight: 500;
      margin-right: 3rem;
      text-align: center;
    }
    li {
      font-size: 0.8rem;
      line-height: 1.2rem;
      margin-right: 7rem;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    h2 {
      margin: 3rem 2rem 1rem 7rem;
      font-size: 1.5rem;
      letter-spacing: 1.5px;
    }
    .div-img {
      width: 30.5rem;
      margin-left: 7rem;
    }
    .carrots {
      width: 1.9rem;
      margin: 0rem 0rem;
    }
    h3 {
      font-size: 1rem;
      line-height: 2rem;
      margin-right: 7rem;
      text-align: center;
    }
    li {
      font-size: 1rem;
      line-height: 1.2rem;
      margin-right: 0rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 3rem;
    margin-bottom: 5rem;
    margin-right: 2rem;
    margin-left: 2rem;
    border-radius: 5rem;
    padding-top: 3rem;
    h2 {
      margin-left: 4rem;
      letter-spacing: 1.5px;
      font-weight: 500;
    }
    .div-img {
      width: 28rem;
      margin-left: 4rem;
    }
    .carrots {
      width: 3rem;
      margin: 0rem 0rem;
    }
    h3 {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 500;
      text-align: left;
    }
    li {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 500;
    }
    ul {
      margin-top: 2rem;
      margin-bottom: 10rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    h2 {
      margin-left: 6rem;
      letter-spacing: 1.5px;
      font-weight: 600;
    }
    .div-img {
      width: 35rem;
      margin-left: 6rem;
    }
    .carrots {
      width: 3rem;
      margin: 0rem 0rem;
    }
    h3 {
      font-size: 1rem;
      line-height: 2rem;
    }
    li {
      font-size: 1rem;
      line-height: 2rem;
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
  box-shadow: 4px 6px 4px #B36BBB;
  font-weight: 600;
  transition-duration: 0.4s;
  :hover {
    background-color: #f57d22;
    color: white;
  }
  @media only screen and (min-width: 375px) and (max-width: 480px) {
    width: 5.5rem;
    height: 2rem;
    color: white;
    font-weight: 500;
    font-size: 0.6rem;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 768px) {
    width: 8rem;
    height: 2.5rem;
    margin: 0rem 3rem 0rem 0rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 1024px) {
    margin: 0rem 1.5rem 0rem 0rem;
    font-weight: 500;
    width: 7.5rem;
    height: 2.5rem;
    color: white;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 0rem 2rem;
    font-weight: 500;
    width: 8rem;
    height: 3rem;
    color: white;
    letter-spacing: 1px;
  }
`;
const Info = styled.div`
  margin-left: -22rem;
  .div-btn {
    margin-top: 21rem;
    padding-left: 6.5rem;
  }
  .div-tab {
    padding-left: 6rem;
  }
  @media only screen and (min-width: 375px) and (max-width: 480px) {
    margin-left: -22rem;
    .div-btn {
      margin-top: 21rem;
      padding-left: 6.5rem;
    }
    .div-tab {
      padding-left: 6rem;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-left: -30rem;
    .div-btn {
      margin-top: 30rem;
      padding-left: 5rem;
    }
    .div-tab {
      padding-left: 0rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    .div-btn {
      margin-top: 7rem;
      padding-left: 34rem;
    }
    .div-tab {
      padding-left: 34rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .div-btn {
      margin-top: 4rem;
      padding-left: 34rem;
    }
    .div-tab {
      padding-left: 34rem;
    }
  }
`;

export default Recipe;
