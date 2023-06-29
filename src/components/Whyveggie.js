import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import peas from "../images/20587-peas-playground-of-love.gif";
import fruit from "../images/132618-healthy-food-for-diet-fitness.gif";
import apple from "../images/124102-loading-screen.gif";

function Whyveggie() {
  return (
    <div>
      <FirstWrapper>
        <div className="div-title-1">
          <h2>Should you become a vegetarian?</h2>
          <p>
            People choose a vegetarian diet for many reasons. For some people,
            eating vegetarian is a way to be healthier or to avoid hormones used
            in animal foods. For others, eating this way has more to do with
            religion, animal rights, or environmental concerns.
          </p>
          <Link to="#veggiefood" smooth>
            <button className="start-eating-well">Start eating well</button>
          </Link>
          <Link to="#secondwrapper" smooth>
            <button className="learn-more">Learn more</button>
          </Link>
        </div>
        <div className="div-peas">
          <img className="peas" src={peas} alt="" />
        </div>
      </FirstWrapper>
      <SecondWrapper>
        <div className="div-fruits">
          <img className="fruits" src={fruit} alt="" />
        </div>
        <div className="div-title-2">
          <h2 id="secondwrapper">
            What are the health benefits of a vegetarian diet?
          </h2>
          <ul>
            <li>Good for heart health</li>
            <li>Reduces cancer risk</li>
            <li>Lowers blood pressure</li>
            <li>Promotes bone health</li>
          </ul>
        </div>
      </SecondWrapper>
      <ThirdWrapper>
      <div className="div-title-3">
        <h2>How to become a vegetarian</h2>
        <p>
          Should you go cold tofurkey? That’s up to you. You may choose to mark
          your calendar with the date you’ll start your vegetarian diet. Or you
          may decide to go with a more gradual approach. You may find it works
          best to first give up red meat, then poultry, then fish. Or you may
          switch over your pantry to all vegetarian to start with a clean slate.
          You may also choose certain days of the week to go vegetarian, like
          practicing Meatless Mondays. You can slowly add more days as you get
          more used to following this diet.
        </p>
        </div>
        <div className="div-apple">
        <img className="apple" src={apple} alt="" />
        </div>
      </ThirdWrapper>
    </div>
  );
}

const FirstWrapper = styled.div`
  margin-top: 7rem;
  display: block;
  height: 38rem;
  .div-title-1 {
    margin-top: 3rem;
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    color: rgb(8, 28, 21);
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1rem;
    font-weight: 300;
    font-size: 0.7rem;
    font-family: "Montserrat";
  }
  .start-eating-well {
    width: 6.5rem;
    height: 2.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    background-color: #56cb56;
    color: white;
    border: none;
    border-radius: 1rem;
    transition-duration: 0.4s;
    margin-top: 1rem;
  }
  .start-eating-well:hover {
    background-color: #588c7e;
  }
  .learn-more {
    width: 6.5rem;
    height: 2.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    background-color: white;
    color: #56cb56;
    border: none;
    border-radius: 1rem;
    transition-duration: 0.4s;
    margin-left: 1rem;
  }
  .learn-more:hover {
    background-color: #588c7e;
    color: white;
  }
  .div-peas {
    width: 14.5rem;
    height: 14.5rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .peas {
    width: 100%;
    height: 100%;
    border-radius: 15rem;
    box-shadow: 8px 10px 8px gray;
  }
  @media only screen and (min-width: 390px) and (max-width: 480px) {
    .div-title-1 {
      margin-top: 3rem;
      width: 20rem;
      margin-right: auto;
      margin-left: auto;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      line-height: 1.3rem;
      font-size: 0.8rem;
    }
    .start-eating-well {
      width: 9rem;
      height: 3rem;
      font-size: 0.8rem;
      margin-top: 2rem;
    }
    .learn-more {
      width: 9rem;
      height: 3rem;
      font-size: 0.8rem;
    }
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    height: 25rem;
    margin-top: 0rem;
    .div-title-1 {
      margin-left: 5rem;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
    }
    p {
      text-align: left;
      line-height: 1.2rem;
      font-size: 0.8rem;
    }
    .start-eating-well {
      width: 9rem;
      height: 3rem;
      font-size: 0.8rem;
      margin-top: 1.5rem;
    }
    .learn-more {
      width: 9rem;
      height: 3rem;
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    .div-peas {
      margin-top: 5rem;
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 33rem;
    .div-title-1 {
      margin-left: 5rem;
      margin-top: 3rem;
      width: 30rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      line-height: 1.8rem;
      font-size: 0.9rem;
    }
    .start-eating-well {
      width: 12rem;
      height: 3.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      margin-top: 2rem;
      letter-spacing: 1px;
    }
    .learn-more {
      width: 12rem;
      height: 3.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      margin-left: 1rem;
      letter-spacing: 1px;
    }
    .div-peas {
      width: 20rem;
      height: 20rem;
      margin-top: 7rem;
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .div-title-1 {
      margin-left: 8rem;
    }
    p {
      margin-top: 1.5rem;
      line-height: 1.7rem;
      font-size: 1rem;
    }
    .div-peas {
      width: 22rem;
      height: 22rem;
      margin-left: 0rem;
    }
  }
`;

const SecondWrapper = styled.div`
  background-color: white;
  display: block;
  height: 40rem;
  h2 {
    padding-top: 0rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  li {
    margin-top: 2rem;
    font-weight: 400;
    font-size: 0.8rem;
  }
  .fruits {
    width: 100%;
    height: 100%;
    border-radius: 15rem;
    box-shadow: 8px 10px 8px gray;
  }
  @media only screen and (min-width: 390px) and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    .div-title-2 {
      width: 20rem;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 2rem;
    }
    h2 {
      margin-top: 3rem;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    }
    li {
      margin-top: 2rem;
      font-weight: 400;
      font-size: 0.8rem;
      margin-left: 3.5rem;
      padding-right: 4.5rem;
      list-style: number;
      text-align: center;
    }
    .div-fruits {
      width: 14.5rem;
      height: 14.5rem;
      margin-bottom: 3rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    height: 25rem;
    margin-top: 0rem;
    .div-title-2 {
      margin-left: 5rem;
      width: 20rem;
    }
    h2 {
      padding-top: 3rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
    li {
      margin-top: 2rem;
      font-weight: 400;
      font-size: 0.8rem;
      list-style: number;
    }
    .div-fruits {
      width: 14.5rem;
      height: 14.5rem;
      margin-top: 5rem;
      margin-left: 5rem;
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    height: 34rem;
    margin-top: 0rem;
    .div-title-2 {
      margin-left: 5rem;
      width: 30rem;
      margin-top: 1rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    li {
      margin-top: 2rem;
      font-size: 0.9rem;
    }
    .div-fruits {
      width: 20rem;
      height: 20rem;
      margin-top: 7rem;
      margin-left: 5rem;
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    height: 32rem;
    margin-top: 0rem;
    .div-title-2 {
      margin-left: 6rem;
      width: 30rem;
    }
    h2 {
      padding-top: 3rem;
      font-size: 2.5rem;
    }
    li {
      margin-top: 2rem;
      font-size: 1rem;
    }
    .div-fruits {
      width: 22rem;
      height: 22rem;
      margin-top: 5rem;
      margin-left: 7rem;
      margin-right: 0;
    }
  }
`;

const ThirdWrapper = styled.div`
  display: block;
  height: 38rem;
  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    color: rgb(8, 28, 21);
  }
  p {
    margin-top: 1.5rem;
    line-height: 1rem;
    font-weight: 600;
    font-size: 0.7rem;
    font-family: "Montserrat";
  }
  .apple {
    width: 100%;
  height: 100%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
  }
  @media only screen and (min-width: 390px) and (max-width: 480px) {
    h2 {
      text-align: center;
      padding-top: 5rem;
      font-weight: 500;
      font-size: 1.5rem;
    }
    p {
      line-height: 1.2rem;
      font-weight: 300;
      font-size: 0.8rem;
      font-family: "Montserrat";
      text-align: center;
    }
    .apple {
      margin-top: 5rem;
      margin-left: 3.3rem;
      width: 60%;
      height: 170%;
      border-radius: 15rem;
      box-shadow: 8px 10px 8px gray;
    }
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    height: 25rem;
    margin-top: 0rem;
    .div-title-3{
      margin-top: 3rem;
      margin-left: 5rem;
      width: 20rem;
    }
    h2 {
      font-size: 1.5rem;
  font-weight: 600;
    }
    p {
      line-height: 1.2rem;
      font-weight: 300;
      font-size: 0.8rem;
      font-family: "Montserrat";
    }
    .div-apple {
      width: 14.5rem;
    height: 14.5rem;
      margin-top: 7rem;
      margin-left: 5rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 33rem;
    .div-title-3 {
      margin-left: 5rem;
      margin-top: 3rem;
      width: 30rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      line-height: 1.8rem;
      font-size: 0.9rem;
    }
    .div-apple {
      width: 20rem;
      height: 20rem;
      margin-top: 8rem;
      margin-left: 4rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .div-title-3 {
      margin-left: 8rem;
    }
    p {
      margin-top: 1.5rem;
      line-height: 1.7rem;
      font-size: 1rem;
    }
    .div-apple {
      width: 22rem;
      height: 22rem;
      margin-left: 7rem;
    }
  }
`;

export default Whyveggie;


/*.div-title-1 {
  margin-top: 3rem;
  width: 20rem;
  margin-right: auto;
  margin-left: auto;
}
h2 {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: rgb(8, 28, 21);
}
p {
  margin-top: 1rem;
  text-align: center;
  line-height: 1rem;
  font-weight: 300;
  font-size: 0.7rem;
  font-family: "Montserrat";
}
.start-eating-well {
  width: 6.5rem;
  height: 2.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: #56cb56;
  color: white;
  border: none;
  border-radius: 1rem;
  transition-duration: 0.4s;
  margin-top: 1rem;
}
.start-eating-well:hover {
  background-color: #588c7e;
}
.learn-more {
  width: 6.5rem;
  height: 2.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: white;
  color: #56cb56;
  border: none;
  border-radius: 1rem;
  transition-duration: 0.4s;
  margin-left: 1rem;
}
.learn-more:hover {
  background-color: #588c7e;
  color: white;
}
.div-peas {
  width: 14.5rem;
  height: 14.5rem;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
}
.peas {
  width: 100%;
  height: 100%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
} */