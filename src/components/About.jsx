import React from "react";
import "./About.css";
import Man from "./man.jpg"

const About = () => {
    return(
        <>
         <div className="masabajo">

         <h1>THE RICK AND MORTY APP</h1>
         <br/>
         <h2>por EUGENIO ARAGÓN</h2>
         <br/>
        <img src={Man} alt="yo"></img>

        <p>Diseñador Multimedial con 8 años de experiencia, especializado en la creación 
de diseños visuales potentes utilizando ilustraciones digitales, imágenes y
tipografía. Comprometido a ayudar a los clientes a dar forma a su identidad de
marca mediante el uso de diseños gráficos convincentes. <br/>
Además, fotógrafo de retratos, productos y eventos.  <br/> <br/>
<strong>FUTURO FULL STACK DEVELOPER</strong>
</p>


         </div>
        
        </>
    )
}

export default About;