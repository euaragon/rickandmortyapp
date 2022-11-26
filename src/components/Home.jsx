import React from "react";
import "./About.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (usuario) => {
  let errors = {};
  if (!regexEmail.test(usuario.username)) errors.username = "Debe ser un correo electrónico";
  if (!usuario.password) errors.password = "Se requiere una constraseña";

  return errors;
};

const Home = () => {
  const [usuario, setUsuario] = React.useState({ username: "", password: "" });

  const [errors, setErrors] = React.useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    setErrors(
      validate({
        ...usuario,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrErrors = Object.keys(errors);
    if (arrErrors.length === 0) {
      alert("Datos completos");
      setUsuario({ username: "", password: "" });

      setErrors({ username: "", password: "" });

    } else { alert("Debes corregir los errores") }
  };

  return (
    <>
      <div className="masabajo2">
        <h1>THE RICK AND MORTY APP</h1>

        <br />
        <div className="masabajo3">
        <h2>Logueate para entrar</h2>
        {/* <NavLink to="/cards">CARDS</NavLink>
        <NavLink to="/about">ABOUT</NavLink> */}
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
            type="text"
          ></input>
          <p className="danger">{errors.password}</p>
          <button>Entrar</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Home;
