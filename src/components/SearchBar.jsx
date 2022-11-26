import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function SearchBar(props) {
  const [char, setChar] = React.useState("");

  const handleInputChange = (event) => {
    setChar(event.target.value);
  };
 

  const { onSearch } = props;
  const aleat = Math.floor(Math.random( )* 826)

  return (
    <div className="navBar">
       <NavLink to="/">HOME</NavLink>
        <NavLink to="/cards">CARDS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      <input value={char} onChange={handleInputChange} type="text" />
      <button onClick={() => onSearch(char)}>Agregar</button>
      <button onClick={ ( )=> onSearch(aleat) }>Random</button>
    </div>
  );
}
