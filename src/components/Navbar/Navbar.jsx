import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>
        <Link to="/" className="link link--logo">
          MARVEL
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className="link">
            Inicio
          </Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <span onClick={logout} className="link">
                Salir
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="link">
                Entrar
              </Link>
            </li>
            <li>
              <Link to="/register" className="button button--link">
                Crear cuenta
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
