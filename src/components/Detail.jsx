import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./About.css";


export default function Detail() {
    const { detailId } = useParams();
    const navigate= useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);


    return(
        <div className="masabajo">
           
            <h1>NOMBRE: {character.name}</h1>
            <img src={character.image} alt={character.name}/>
            <h2>STATUS: {character.status}</h2>
            <h2>SPECIE: {character.species}</h2>
            <h2>GENDER: {character.gender}</h2>
            <h2>ORIGIN: {character.origin?.name}</h2>
            <br/>
            <button className="volver" onClick={() => navigate("/cards")}>Volver</button>
        </div>
    )
}

