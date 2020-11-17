import { useQuery } from "@apollo/react-hooks";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FETCH_CATEGORIAS_QUERY } from "../graphql/getQuerys";
import Subcategoria from "./SubCat";

function Categorias({ marca }) {
  const [catNom, setCatNom] = useState("");
  const [subcategorias, setSubcategorias] = useState("");
  let categorias = "";

  const setSub = (nombre, subs) => {
    setCatNom(nombre);
    setSubcategorias(subs);

  };

  useEffect(() => {
    setCatNom("")
  }, [marca])
  const { data } = useQuery(FETCH_CATEGORIAS_QUERY, {
    variables: { marca },
    onError(err) {
      console.log(err);
    },
  });
  if (data) {
    categorias = { data: data.getCategorias };
  }

  return (
    <>
      <section className="container2">
        {categorias.data &&
          categorias.data.map((cat) => (
            <Link
              to="/newP/1"
              className="boxCat"
              key={cat.id}
              onClick={() => setSub(cat.nombre, cat.subcategorias)}
            >
              {cat.nombre}
            </Link>
          ))}
      </section>
      {catNom !== "" && <Subcategoria subcategorias={subcategorias} />}
    </>
  );
}

export default Categorias;
