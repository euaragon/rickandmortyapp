import { useState } from "react";

import "./App.css";
import Home from "./components/Home.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
//import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/cards" element={
           <div className="grid">
           <Cards characters={characters} onClose={onClose} />
         </div>
        }/>
        <Route exact path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
