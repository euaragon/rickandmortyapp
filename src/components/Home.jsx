import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import imagen from "./img.png"

const Home = () => {
    return(
        <>
         <div className="masabajo2">
         <h1>THE RICK AND MORTY APP</h1>
         <br/>
        <NavLink to="/cards">CARDS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <img className="imagen1" src={imagen} alt="imagen"></img>

         </div>
        
        </>
    )
}

export default Home;