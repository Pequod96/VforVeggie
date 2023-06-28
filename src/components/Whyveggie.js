import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import peas from '../images/20587-peas-playground-of-love.gif';
import fruit from '../images/132618-healthy-food-for-diet-fitness.gif';
import apple from '../images/124102-loading-screen.gif';

function Whyveggie() {
  return (
    <div>
      <FirstWrapper>
      <div className="div-title-1">
         <h2>Should you become a vegetarian?</h2>
           <p>People choose a vegetarian diet for many reasons.
              For some people, eating vegetarian is a way to be healthier or to avoid hormones used in animal foods.
              For others, eating this way has more to do with religion, animal rights, or environmental concerns.</p>
              <Link to="#veggiefood" smooth><button className="start-eating-well">Start eating well</button></Link>
              <Link to="#secondwrapper" smooth><button className="learn-more">Learn more</button></Link>
              </div>
              <div className="div-peas">
              <img className="peas" src={peas} alt="" />
              </div>
      </FirstWrapper>
      <SecondWrapper>
        <h2 id="secondwrapper">What are the health benefits of a vegetarian diet?</h2>
          <ul>
             <li>Good for heart health</li>
             <li>Reduces cancer risk</li>
             <li>Lowers blood pressure</li>
             <li>Promotes bone health</li>
          </ul>
          <img className="fruits" src={fruit} alt="" />
      </SecondWrapper>
      <ThirdWrapper>
          <h2>How to become a vegetarian</h2>
            <p>Should you go cold tofurkey? That’s up to you.
               You may choose to mark your calendar with the date you’ll start your vegetarian diet.
               Or you may decide to go with a more gradual approach.
               You may find it works best to first give up red meat,
               then poultry, then fish. Or you may switch over your pantry to all vegetarian to start with a clean slate.
               You may also choose certain days of the week to go vegetarian, like practicing Meatless Mondays.
               You can slowly add more days as you get more used to following this diet.</p>
               <img className="apple" src={apple} alt="" />
      </ThirdWrapper>
    </div>
  )
}


const FirstWrapper = styled.div`
margin-top: 7rem;
  display: block;
  height: 35rem;
  .div-title-1{
    margin-top: 3rem;
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
  }
h2{
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: rgb(8, 28, 21);
}
p{
  margin-top: 1rem;
  text-align: center;
  line-height: 1rem;
  font-weight: 300;
  font-size: 0.7rem;
  font-family: 'Montserrat';
}
.start-eating-well{
  width: 6.5rem;
  height: 2.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: #56CB56;
  color: white;
  border: none;
  border-radius: 1rem;
  transition-duration: 0.4s;
  margin-top: 1rem;
}
.start-eating-well:hover{
  background-color:  #588c7e;
}
.learn-more{
  width: 6.5rem;
  height: 2.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: white;
  color: #56CB56;
  border: none;
  border-radius: 1rem;
  transition-duration: 0.4s;
  margin-left: 1rem;
}
.learn-more:hover{
  background-color: #588c7e;
  color: white;
}
.div-peas{
  width: 14.5rem;
  height: 14.5rem;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
}
.peas{
  width: 100%;
  height: 100%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  
  .div-title-1{
    margin-top: 3rem;
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
  }
h2{
  font-size: 1.5rem;
}
p{
  line-height: 1.3rem;
  font-size: 0.8rem;
}
.start-eating-well{
  width: 9rem;
  height: 3rem;
  font-size: 0.8rem;
  margin-top: 2rem;
}
.learn-more{
  width: 9rem;
  height: 3rem;
  font-size: 0.8rem;
}
}
@media only screen and (min-width: 768px){
  display: flex;
  height: 15rem;
  margin-top: 0rem;
  .div-title-1{
    margin-left: 5rem;
  }
h2{
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
}
p{
  text-align: left;
  line-height: 1.2rem;
  font-size: 0.8rem;
}
.start-eating-well{
  width: 9rem;
  height: 3rem;
  font-size: 0.8rem;
  margin-top: 1.5rem;
}
.learn-more{
  width: 9rem;
  height: 3rem;
  font-size: 0.8rem;
  margin-left: 1rem;
}
.div-peas{
  margin-top: 5rem;
  margin-left: 1rem;
}
}
@media only screen and (min-width: 1024px){
  height: 20rem;
  .div-title-1{
    margin-left: 5rem;
    margin-top: 3rem;
    width: 30rem;
  }
  h2{
  font-size: 2.5rem;
}
p{
  line-height: 1.8rem;
  font-size: 0.9rem;
}
.start-eating-well{
  width: 12rem;
  height: 3.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 2rem;
  letter-spacing: 1px;
}
.learn-more{
  width: 12rem;
  height: 3.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 1rem;
  letter-spacing: 1px;
}
.div-peas{
  width: 20rem;
  height: 20rem;
  margin-top: 7rem;
  margin-left: 1rem;
}
}
@media only screen and (min-width: 1200px){
  .div-title-1{
    margin-left: 8rem;
  }
p{
  margin-top: 1.5rem;
  line-height: 1.7rem;
  font-size: 1rem;
}
.div-peas{
  width: 22rem;
  height: 22rem;
  margin-left: 0rem;
}
}
`;

const SecondWrapper = styled.div`
background-color: white;
height: 30rem;
h2{
  padding-top: 6rem;
  font-size: 1.5rem;
  font-weight: 500;
}
li{
  margin-top: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
.fruits{
  margin-top: 1.5rem;
  margin-left: 4.7rem;
  width: 50%;
  height: 30%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
@media only screen and (min-width: 320px) and (max-width: 375px){
  height: 32rem;
  margin-top: 2rem;
h2{
  padding-top: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}
li{
  text-align: center;
  margin-top: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
.fruits{
  margin-top: 2.5rem;
  margin-left: 4.7rem;
  width: 50%;
  height: 30%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  height: 37rem;
  margin-top: 3rem;
h2{
  text-align: center;
  padding-top: 3rem;
  font-size: 1.5rem;
  font-weight: 500;
}
li{
  padding-top: 0.2rem;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
}
.fruits{
  margin-top: 3rem;
  margin-left: 6.1rem;
  width: 45%;
  height: 30%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 768px){
  height: 25rem;
  margin-top: 12rem;
h2{
  padding-left: 22rem;
  padding-right: 3rem;
  padding-top: 3rem;
  font-size: 1.5rem;
  font-weight: 500;
}
li{
  margin-left: 24rem;
  margin-top: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
.fruits{
  margin-top: -18rem;
  margin-left: 4rem;
  width: 30%;
  height: 58%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 1024px){
  height: 34rem;
  margin-top: 14rem;
h2{
  padding-left: 30rem;
  padding-top: 4rem;
  font-size: 2.5rem;
  font-weight: 600;
}
li{
  margin-left: 32rem;
  margin-top: 2rem;
  padding-top: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
}
.fruits{
  margin-top: -24rem;
  margin-left: 4rem;
  width: 32%;
  height: 62%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 1200px){
  height: 35rem;
  margin-top: 18rem;
h2{
  padding-left: 38rem;
  padding-right: 3rem;
  padding-top: 6rem;
  font-size: 2.5rem;
  font-weight: 500;
}
li{
  margin-left: 42rem;
  margin-top: 2.5rem;
  padding-top: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
}
.fruits{
  margin-top: -22rem;
  margin-left: 7rem;
  width: 27%;
  height: 65%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
`;

const ThirdWrapper = styled.div`
margin: 22rem 2rem 0rem 2rem;
h2{
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(8, 28, 21);
}
p{
  margin-top: 1.5rem;
  line-height: 1rem;
  font-weight: 600;
  font-size: 0.7rem;
  font-family: 'Montserrat';
}
.apple{
  margin-top: 2rem;
  margin-left: 3.3rem;
  width: 60%;
  height: 170%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}

@media only screen and (min-width: 320px) and (max-width: 375px){
  margin: 0rem 2rem 0rem 2rem;
h2{
  padding-top: 3rem;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
}
p{
  line-height: 1.1rem;
  font-weight: 400;
  font-size: 0.7rem;
  font-family:'Montserrat';
  text-align: center;
}
.apple{
  margin-top: 2rem;
  margin-left: 3.3rem;
  width: 60%;
  height: 170%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  margin: 0rem 2rem 0rem 2rem;
h2{
  text-align: center;
  padding-top: 5rem;
  font-weight: 500;
  font-size: 1.5rem;
}
p{
  line-height: 1.2rem;
  font-weight: 300;
  font-size: 0.8rem;
  font-family: 'Montserrat';
  text-align: center;
}
.apple{
  margin-top: 5rem;
  margin-left: 3.3rem;
  width: 60%;
  height: 170%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 768px){
  margin: 0rem 22rem 0rem 4rem;
h2{
  padding-top: 5rem;
  font-weight: 600;
  font-size: 1.5rem;
}
p{
  line-height: 1.1rem;
  font-weight: 400;
  font-size: 0.8rem;
  font-family: 'Montserrat';
}
.apple{
  margin-top: -27rem;
  margin-left: 25rem;
  width: 70%;
  height: 175%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 1024px){
  margin:0rem 30rem 5rem 5rem;
h2{
  padding-top: 5rem;
  font-weight: 600;
  font-size: 2.5rem;
}
p{
  line-height: 1.7rem;
  font-weight: 500;
  font-size: 0.9rem;
}
.apple{
  margin-top: -27rem;
  margin-left: 33rem;
  width: 70%;
  height: 175%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
@media only screen and (min-width: 1200px){
  margin: 8rem 40rem 3rem 8rem;
h2{
  font-size: 2.5rem;
  font-weight: 600;
}
p{
  line-height: 1.7rem;
  font-weight: 300;
  font-size: 1rem;
  width: 30rem;
}
.apple{
  margin-top: -22rem;
  margin-left: 40rem;
  width: 60%;
  height: 185%;
  border-radius: 15rem;
  box-shadow: 8px 10px 8px gray;
}
}
`;


export default Whyveggie;
