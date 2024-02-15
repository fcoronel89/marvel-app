import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import './Layout.scss'
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="wrapper-container">
        {!currentUser ? (
          <div className="welcome-container">
            <h1>Bienvenido</h1>
            <p>Por favor inicia sesion para continuar</p>
            <div>
              <Link to="/login" className="button button--link">Entrar</Link>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
