import "./App.css";
import Home from "./components/Home.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Favorites from "./components/Favorites";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect  } from 'react';



function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "eugenio.aragon@gmail.com";
  const password = "123456";


  const login = (usuario) => {
    if(usuario.username === username && usuario.password === password){
      setAccess(true);
      navigate("/cards");
    }
  }
    
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

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
     
      <Routes>
       
        <Route exact path="/" element={<Home login={login}/>}/>
       
        <Route  path="/about" element={
           <div className="grid">
             <Nav onSearch={onSearch} />
             <About/>
         </div>
        }/>

        <Route  path="/favorites" element={
           <div className="grid">
             <Nav onSearch={onSearch} />
             <Favorites/>
         </div>
        }/>

        <Route  path="/cards" element={
           <div className="grid">
             <Nav onSearch={onSearch} />
           <Cards characters={characters} onClose={onClose} />
         </div>
        }/>
        <Route  path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
