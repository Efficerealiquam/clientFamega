import { useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { FETCH_ALL_MARCAS_QUERY } from "../graphql/getQuerys";
import "../styles/all-marcas.css";

function Marcas() {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useQuery(FETCH_ALL_MARCAS_QUERY);

  let marcas = "";
  if (data) {
    marcas = { data: data.getMarcas };
  }

  return (
    <div className="containerP">
      {marcas.data &&
        marcas.data.map((marca, i) => (
          <div
            className="sectionP"
            key={marca.id}
            style={
              i % 2 === 0
                ? {
                    background: `#ffffff url(${marca.imagen})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    color: "#555",
                  }
                : {
                    background: `#333 url(${marca.imagen})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    color: "#555",
                  }
            }
          >
            <div className="contentP">
              <h1>{marca.nombre}</h1>
              <h3>{marca.made}</h3>
              <p>
                {i}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem itaque repudiandae consectetur atque nemo,
                eveniet reprehenderit officiis, ex quisquam error voluptate
                voluptatibus quam, magnam deleniti Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dicta possimus voluptates,
                nesciunt a sequi non id sunt commodi, modi adipisci quas et
                repudiandae assumenda consequatur illum deserunt ratione sed
                suscipit.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Marcas;
