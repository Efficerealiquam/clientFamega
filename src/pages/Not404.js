import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/not404.css";

function Not404() {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contG">
      <div className="containerNF">
        <div className="contentNF">
          <h2 className="h2-404">404</h2>
          <h4 className="h4-404">Opps! Pagina no encontrada</h4>
          <p className="p-404">
            Lo lamentamos la pagina que busca no existe. Pero puede ir a nuestro
            pagina principal y navegar para que encuentre lo que busca.
          </p>
          <Link to="/" className="link-404">
            Regresar al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Not404;
