import React from "react";
import {logIn} from '../../services/auth.service';
import {useNavigate} from 'react-router-dom'
function LogIn() {
  const [correo, setCorreo]=React.useState("");
  const [contraseña, setContraseña] = React.useState("") 
  let navigate =useNavigate();
  const handleOnChangeMail=(e)=>{
    setCorreo(e.target.value);
  }
  const handleOnChangePassword=(e)=>{
    setContraseña(e.target.value)
  }
  const handleOnSubmit=(e)=>{

    e.preventDefault();
    logIn(correo, contraseña).then(
    ()=>{
      navigate('/home')
        }
    );
  }
  return (
    <React.Fragment>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form>
          <div className="form-group mb-6">
            <label
              className="form-label inline-block mb-2 text-gray-700"
            >
              Correo
            </label>
            <input
              type="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={correo}
              onChange={handleOnChangeMail}
            />
          </div>
          <div className="form-group mb-6">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              onChange={handleOnChangePassword}
            >
              Contaseña
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              value={contraseña}
              onChange={handleOnChangePassword}
            />
          </div>

          <button
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      type="submit"
      onClick={handleOnSubmit}
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            ¿No estas registrado?{" "}
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Registrate
            </a>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

export { LogIn };
