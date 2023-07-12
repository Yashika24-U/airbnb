import React from 'react';
import ReactDOM from 'react-dom/client';
 import Navbar from './Components/Navbar.js';
 //import Hero from './Components/Hero.js'
 import Card from './Components/Card.js';
 import Data from './Data.js';
import './style.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

 // console.log(Data);
 const res = Data.map(ele=>{
  return(
    <Card 
    img = {ele.coverImg}
    rating = {ele.stats.rating}
    reviewCount = {ele.stats.reviewCount}
    location = {ele.location}
    title = {ele.title}
    price = {ele.price}     
    />
    )
  })
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div>
    <Navbar/>
    {res}
     {/* <Hero/> */}
    {/* <Card
    img src ={image}
    rating = "5.0"
    reviewCount = {6}
    country = "USA"
    title = "Life Lessons with Katia Zaferes"
    price={136}
    /> */}
   </div>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
