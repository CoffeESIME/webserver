import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./arduardoSignIn.css";

function SignIn() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate=useNavigate();
  const handleNombre = (e) => {
    setNombre(e.target.value);
    setSubmitted(false);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
    setSubmitted(false);
  };
  const handleEmpresa = (e) => {
    setEmpresa(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      empresa === "" ||
      apellido === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      axios.post(`http://192.168.1.73:4000/API/arduardo/new-user`, { name: nombre, last_name: apellido, company:empresa, email:email, password:password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      navigate('/')
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1> Te has registrado correctamente {nombre}</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Por favor ingresa todos los datos</h1>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="">
        <div className="reg-user">
          <h1>Registro de usuarios</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form className="form">
          {/* Labels and inputs for form data */}
          <label className="label">Nombre</label>
          <input
            onChange={handleNombre}
            className="input"
            value={nombre}
            type="text"
          />
          <label className="label">Apellido</label>
          <input
            onChange={handleApellido}
            className="input"
            value={apellido}
            type="text"
          />
          <label className="label">Empresa</label>
          <input
            onChange={handleEmpresa}
            className="input"
            value={empresa}
            type="text"
          />
          <label className="label">Correo</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />

          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export { SignIn };
