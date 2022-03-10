import { Link, useNavigate } from "react-router-dom";
export const NavBar = ({ user, logOut }) => {
    const navigate = useNavigate(); 
    const handleOnClick = () =>{
        logOut();
        navigate('/');
    }
    console.log(window.location.href);
  return (
      
    <>
      <nav>
        {!!user && (
          <>
            <Link to="">Tablas</Link>
            <Link to="">Graficas</Link>
            <Link to="">Mimico</Link>
            <button onClick={handleOnClick}>LogOut</button>
          </>
        )}
        {!user && window.location.href!=='http://192.168.1.76:3000/log-in' && <Link to="/log-in">Entrar</Link>}
      </nav>
    </>
  );
};
