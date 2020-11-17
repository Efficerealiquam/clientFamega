import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import "../styles/home.css";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { FETCH_GETLISTA_QUERY, FETCH_MARCAS_QUERY } from "../graphql/getQuerys";
import Categorias from "../components/Categorias";
import { Link } from "react-router-dom";
import Productos from "../components/Productos";
import { ADD_PRODUCT_LISTA } from "../graphql/getMutations";

function Home(props) {
  /* Obtener las marcas */
  const [marca, setMarca] = useState("");
  const [idProducto, setIdProducto] = useState("");

  function setMar(params) {
    setMarca(params);
    localStorage.setItem("idSub", "");
  }
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let marcas = "";
  const { data } = useQuery(FETCH_MARCAS_QUERY);
  if (data) {
    marcas = { data: data.getMarcas };
  }
  // eslint-disable-next-line
  const [addProducto, { error }] = useMutation(ADD_PRODUCT_LISTA, {
    variables: { proId: idProducto, cantidad: "", medida: "" },
    onError(err) {
      // console.log(err);
    },
  });

  useQuery(FETCH_GETLISTA_QUERY);

  useEffect(() => {
    addProducto();
    // eslint-disable-next-line
  }, [idProducto]);
  return (
    <>
      <Slider />
      <div className="row divRow">
        <h1 className="h1S">Marcas & Categorias</h1>
        <section className="containerT" style={{ marginTop: "100px" }}>
          {marcas.data &&
            marcas.data.map((marca) => (
              <Link
                to="/newP/1"
                className="box"
                key={marca.id}
                onClick={() => setMar(marca.nombre)}
              >
                {marca.nombre}
              </Link>
            ))}
        </section>
        {marca !== "" && <Categorias marca={marca} />}

        <Productos setIdProducto={setIdProducto} props={props} />
      </div>
    </>
  );
}

export default Home;
