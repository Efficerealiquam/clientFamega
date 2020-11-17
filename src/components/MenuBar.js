import React, { useContext } from "react";
import "../styles/MenuBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COUNTPRODCUTS_QUERY } from "../graphql/getQuerys";

function MenuBar() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  let userData = "";
  const { user, logout } = useContext(AuthContext);

  const { data } = useQuery(FETCH_COUNTPRODCUTS_QUERY);

  if (data) {
    userData = data.getListaActual;
  }

  return (
    <>
      <nav>
        <header>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <Link to="/" className="logo">
            Fam<span>ega</span>
          </Link>
          <ul className="lista">
            <li>
              <Link to="/">
                <span>
                  <i className="fas fa-home"></i>Inicio
                </span>
              </Link>
            </li>
            <li className="uli">
              <Link to="/sobrenosotros">
                <span>
                  <i className="fas fa-users"></i> Sobre Nosotros
                </span>
              </Link>
            </li>
            <li className="uli">
              <Link to="/marcas">
                <span>
                  <i className="fab fa-artstation"></i> Marcas
                </span>
              </Link>
            </li>
            <li className="uli">
              <Link to="/servicios">
                <span>
                  <i className="fas fa-concierge-bell"></i> División de
                  servicios
                </span>
              </Link>
            </li>
            <li className="uli">
              <Link to="/listacarrito">
                <span>
                  <i className="fas fa-cart-plus"></i>{" "}
                  {userData.productosCount > 0 ? userData.productosCount : "0"}
                </span>
              </Link>
            </li>
          </ul>

          {user ? (
            <ul className="lista2">
              <li>
                <Link to="/editarperfil">
                  <span>
                    <i className="fas fa-users-cog"></i> Perfil{" "}
                    {user.razonsocial}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  <span>
                    <i className="fas fa-users-cog"></i> Cerrar Sesion
                  </span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="lista2">
              <li>
                <Link to={{ pathname: "/iniciarsesion", state: true }}>
                  <span>
                    <i className="fas fa-sign-in-alt"></i> Iniciar Sesion
                  </span>
                </Link>
              </li>

              <li className="uli">
                <Link to={{ pathname: "/iniciarsesion", state: false }}>
                  <span>
                    <i className="fas fa-user-plus"></i> Registrarse
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </header>
      </nav>
    </>
  );
}

export default MenuBar;
