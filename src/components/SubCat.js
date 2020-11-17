import React from "react";
import { Link } from "react-router-dom";

function SubCategoria({ subcategorias }) {
  const asigIdSub = (id) => {
    localStorage.setItem("idSub", id);
  };
  return (
    <>
      <section className="container2">
        {subcategorias &&
          subcategorias.map(({ nombre, id }) => (
            <Link
              to="/newP/1"
              className="boxCat"
              key={id}
              onClick={() => asigIdSub(id)}
            >
              {nombre}
            </Link>
          ))}
      </section>
    </>
  );
}

export default SubCategoria;
