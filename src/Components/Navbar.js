import React from "react"
import airbnb1 from "../airbnb1.svg"
 export default function Navbar()
 {
    return(
        <nav>
            <img className = "nav--logo " src ={airbnb1} alt = "airbnb"/>
        </nav>
    )
 }