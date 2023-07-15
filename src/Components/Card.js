import React from "react"
import star1 from "../Star 1.png"
//import x from "../images/image12.png"

// coverImg: "image12.png"
// description : 
// "Throughout my career, many of my highest moments only came after setbacks and losses.But learning from those difficult moments is what gave me the ability to rise above them and reach my goals."
// id : 1,
// location : "Online",
// openSpots : 23,
// price : 150,
// stats : {rating: 5, reviewCount: 12},
// title : "Life Lessons with Katia Zaferes"



export default function Card(props)
{
  let cardtext
  if(props.openSpots === 0)
    cardtext = "SOLD OUT"
  else if(props.location === "Online")
    cardtext = "ONLINE"
 console.log(props)
  return(
  <div className="cards">   
  <div className = "card">
      {cardtext &&<div className="card--badge">{cardtext}</div>}
         
          <img src= {require(`../images/${props.ele.coverImg}`)} alt = " " className ="card--image" /> 
          <div className = "card--stats">
              <img className = "card--star" src = {star1}/>
              <span>{props.ele.stats.rating}</span>
              <span className="grey">{props.ele.stats.reviewCount}</span>
              <span className="grey">.</span>
              <span  className="grey">{props.ele.location}</span>
          </div>
          <p className="card--title">{props.ele.title}</p>
          <p><span className = "bold">{props.ele.price}</span>/person</p>
      </div>   
      </div>        
      
    )
}