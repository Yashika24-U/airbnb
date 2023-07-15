import React from 'react';
import ReactDOM from 'react-dom/client';
 import Navbar from './Components/Navbar.js';
 //import Hero from './Components/Hero.js'
 import Card from './Components/Card.js';
 import data from './data.js';
import './style.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hero from './Components/Hero.js';

 // console.log(Data);
 
 const cards = data.map(ele=>{
  return(
    <Card 
    key = {ele.id}
    ele = {ele}  
   />
    )
  })





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div>
      <Navbar/>
       <Hero/> 
      <section className="cards--list"> 
      {cards}  
      </section> 
    
   </div>
     
  </React.StrictMode>
);



 {/* <Hero/> */}
    {/* <Card
    img src ={image}
    rating = "5.0"
    reviewCount = {6}
    country = "USA"
    title = "Life Lessons with Katia Zaferes"
    price={136}
    /> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
