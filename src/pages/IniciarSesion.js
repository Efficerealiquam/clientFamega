import React, { useEffect, useState } from "react";
import "../styles/sesion.css";
import ComIniciarSesion from "../components/ComIniSesion";
import ComRegistrarse from "../components/ComRegistrarse";

function IniciarSesion(props) {
  const [stateS, setStateS] = useState(props.location.state);

  useEffect(() => {
    if (props.location.state !== undefined) {
      setStateS(props.location.state);
    }
  }, [props.location.state]);

  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="sectionIniciarSesion">
        {stateS === false ? (
          <ComRegistrarse props={props} />
        ) : (
          <ComIniciarSesion props={props} />
        )}
      </section>
    </>
  );
}

export default IniciarSesion;
