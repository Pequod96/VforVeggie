import styled from "styled-components";
import peas from '../images/20587-peas-playground-of-love.gif';
import fruit from '../images/132618-healthy-food-for-diet-fitness.gif';
import apple from '../images/124102-loading-screen.gif';

function Whyveggie() {
  return (
    <div>
      <FirstWrapper>
         <h2>Should you become a vegetarian?</h2>
           <p>People choose a vegetarian diet for many reasons.
              For some people, eating vegetarian is a way to be healthier or to avoid hormones used in animal foods.
              For others, eating this way has more to do with religion, animal rights, or environmental concerns.</p>
              <img className="peas" src={peas} alt="" />
      </FirstWrapper>
      <SecondWrapper>
        <h2>What are the health benefits of a vegetarian diet?</h2>
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
margin: 6rem 40rem 3rem 3rem;
h2{
  font-weight: 600;
  font-size: 2.5rem;
  color: rgb(8, 28, 21)
}
p{
  padding: 2rem 0rem;
  line-height: 1.8rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.peas{
position: absolute;
top: 11rem;
right: 5rem;
width: 30%;
border-radius: 11rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  margin: 7rem 2rem 0rem 2rem;
  height: 12rem;
h2{
  font-size: 1.3rem;
}
p{
  line-height: 1rem;
  font-weight: 600;
  font-size: 0.7rem;
}
.peas{
  top: 25rem;
  right: 6rem;
  width: 50%;
}
}
@media only screen and (min-width: 768px){
  margin: 4rem 20rem 0rem 2rem;
  height: 12rem;
h2{
  font-size: 1.5rem;
}
p{
  line-height: 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.peas{
  top: 9rem;
  right: 3rem;
  width: 30%;
}
}
@media only screen and (min-width: 1024px){
  margin: 4rem 20rem 0rem 2rem;
  height: 12rem;
h2{
  font-size: 1.5rem;
}
p{
  line-height: 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.peas{
  top: 9rem;
  right: 3rem;
  width: 30%;
}
}
`;

const SecondWrapper = styled.div`
margin: 15rem 2rem 2rem 40rem;
h2{
  font-weight: 600;
  font-size: 3rem;
  color: rgb(8, 28, 21)
}
li{
  margin-left: 2rem;
  padding: 3rem 1rem 0rem 1rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.fruits{
  position: absolute;
  top: 47rem;
  left: 3rem;
  width: 33%;
  border-radius: 11rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  margin: 16rem 2rem 0rem 2rem;
  height: 12rem;
h2{
  font-size: 1.3rem;
}
li{
  margin-left: 1.5rem;
  padding: 2rem 1rem 0rem 1rem;
  font-weight: 600;
  font-size: 0.8rem;
}
.fruits{
  margin-top: 12rem;
  margin-left: 3rem;
  width: 50%;
  }
}
@media only screen and (min-width: 768px){
  margin: 12rem 2rem 0rem 22rem;
  height: 12rem;
h2{
  font-size: 1.5rem;
}
li{
  margin-left: 1.5rem;
  padding: 2rem 1rem 0rem 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.fruits{
  margin-top: -12rem;
  width: 30%;
  }
}
@media only screen and (min-width: 1024px){
  margin: 12rem 2rem 0rem 22rem;
  height: 12rem;
h2{
  font-size: 1.5rem;
}
li{
  margin-left: 1.5rem;
  padding: 2rem 1rem 0rem 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.fruits{
  margin-top: -12rem;
  width: 30%;
  }
}
`;

const ThirdWrapper = styled.div`
margin: 15rem 40rem 3rem 3rem;
h2{
  font-weight: 600;
  font-size: 2.5rem;
  color: rgb(8, 28, 21);
}
p{
  padding: 2rem 0rem 2rem;
  line-height: 1.8rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.apple{
  position: absolute;
  top: 90rem;
  right: 5rem;
  width: 30%;
  border-radius: 11rem;
}
@media only screen and (min-width: 390px) and (max-width: 480px){
  margin: 22rem 2rem 0rem 2rem;
h2{
  font-weight: 600;
  font-size: 1.2rem;
}
p{
  padding: 2rem 0rem;
  line-height: 1rem;
  font-weight: 600;
  font-size: 0.7rem;
}
.apple{
  right: 6rem;
  width: 50%;
}
}
@media only screen and (min-width: 768px){
  margin: 12rem 20rem 0rem 2rem;
h2{
  font-weight: 600;
  font-size: 1.5rem;
}
p{
  padding: 2rem 0rem;
  line-height: 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.apple{
  top: 58rem;
  right: 3rem;
  width: 30%;
}
}
@media only screen and (min-width: 1024px){
  margin: 12rem 20rem 0rem 2rem;
h2{
  font-weight: 600;
  font-size: 1.5rem;
}
p{
  padding: 2rem 0rem;
  line-height: 1rem;
  font-weight: 500;
  font-size: 0.8rem;
}
.apple{
  top: 58rem;
  right: 3rem;
  width: 30%;
}
}
`;


export default Whyveggie;
