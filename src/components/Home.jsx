import React from "react";
import "./About.css";
//import { useNavigate } from "react-router";
import Rick from "../components/rickymorty.png"
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (usuario) => {
  let errors = {};
  if (!regexEmail.test(usuario.username)) errors.username = "Debe ser un correo electrónico";
  if (!usuario.password || (usuario.password.length < 6 && usuario.password.length > 10)) errors.password = "Se requiere una constraseña";

  return errors;
};

const Home = (props) => {
  const [usuario, setUsuario] = React.useState({ username: "", password: "" });

  const [errors, setErrors] = React.useState({ username: "", password: "" });
  //const navigate = useNavigate();
  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    setErrors(
      validate({
        ...usuario,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = () => {
   //props.preventDefault();
    props.login(usuario)
    // const arrErrors = Object.keys(errors);
    // if (arrErrors.length === 0) {
    //   alert("Datos completos");
    //   setUsuario({ username: "eugenio.aragon@gmail.com", password: "123456" });

    //   setErrors({ username: "", password: "" });
    //   navigate("/cards");

    // } else { alert("Debes corregir los errores") }
  };

  return (
    <>
      <div className="masabajo2">
        <h1>THE RICK AND MORTY APP</h1>
        <img className="img_inicio" src={Rick}  alt="rick and morty" />
        <br />
        <div>
        <h2>Logueate para entrar</h2>
        
        <form onSubmit={handleSubmit}>
          <label>USERNAME: </label>
          <input
            onChange={handleChange}
            name="username"
            value={usuario.username}
            placeholder="ingresá tu usuario..."
            type="text"
          ></input>
          <p className="danger">{errors.username}</p>
          <label>PASSWORD: </label>
          <input
            onChange={handleChange}
            name="password"
            value={usuario.password}
            placeholder="ingresá tu contraseña..."
            type="password"
          ></input>
          <p className="danger">{errors.password}</p>
          <button type="submit" disabled={!usuario.username || !usuario.password}>Entrar</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Home;
