import { useQuery } from "@apollo/react-hooks";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth";
import {
  FETCH_PRODUCTOS_GENERIC_QUERY,
  FETCH_PRODUCTOS_ID_QUERY,
  FETCH_COUNTPRODUC_QUERY,
  FETCH_COUNTPRODUC_ID_QUERY,
} from "../graphql/getQuerys";
import PaginationItem from "./PaginationItems";

function Productos({ setIdProducto, props }) {
  let subId = "";
  const producsPerPage = 10;
  let numberOfPages;
  let totalCount = 0;

  const { user } = useContext(AuthContext);

  const { page } = useParams();

  if (localStorage.getItem("idSub")) {
    subId = localStorage.getItem("idSub");
  }
  /* TRAE TODOS LOS PRODUCTOS EN GENERAL */
  const { data } = useQuery(FETCH_PRODUCTOS_GENERIC_QUERY, {
    variables: {
      limit: producsPerPage,
      skip: producsPerPage * page - producsPerPage,
    },
  });

  /* CANTIDAD DE PRODUCTOS EN GENERAL */
  const countP = useQuery(FETCH_COUNTPRODUC_QUERY);

  /* CANTIDAD DE PRODUCTOS FILTRADOS */
  const countP_ID = useQuery(FETCH_COUNTPRODUC_ID_QUERY, {
    variables: { subId },
    onError(err) {
      console.log(err);
    },
  });
  /* TRAE LOS PRODUCTOS FILTRADO POR SUBCATEGORIA */
  const getPro = useQuery(FETCH_PRODUCTOS_ID_QUERY, {
    variables: {
      limit: producsPerPage,
      skip: producsPerPage * page - producsPerPage,
      subId,
    },
    onError(err) {
      console.log(err);
    },
  });

  if (countP.data) {
    totalCount = countP.data.getCountProductos;
  }
  if (countP_ID.data) {
  }
  if (countP_ID.data) {
    const c = countP_ID.data.getCountProductosID;
    if (c !== 0) {
      totalCount = c;
    }
  }
  let productosID = "";
  if (getPro.data) {
    productosID = { data: getPro.data.getProductos };
  }

  let productos = "";

  if (data) {
    productos = { data: data.getProductosGeneric };
  }

  function redirec() {
    props.history.push("/iniciarsesion");
  }

  numberOfPages = Math.ceil(totalCount / producsPerPage);

  return (
    <div>
      <div
        className="row"
        style={{ marginRight: "0", justifyContent: "center", width: "100%" }}
      >
        <h1 className="h1S">Productos</h1>

        {subId === "" ? (
          <>
            {" "}
            {productos.data &&
              productos.data.map(
                ({
                  id,
                  imagen,
                  cantidad_cajon,
                  cantidad_caja,
                  medidas,
                  nombre,
                }) => (
                  <div className="cold-md-4 " key={id}>
                    <div className="card">
                      <div className="imgBx">
                        <img src={imagen} alt={nombre} />
                      </div>
                      <div className="contentBx">
                        <h4>{nombre}</h4>
                        <div className="size">
                          <h5>Medidas :</h5>

                          {medidas.map((med) => (
                            <span key={med.id}>{med.body}</span>
                          ))}
                        </div>
                        <div className="size">
                          <h5> Cajon :</h5>
                          <p>{cantidad_cajon}</p>
                        </div>
                        <div className="size">
                          <h5> Caja o Bolsa :</h5>
                          <p>{cantidad_caja}</p>
                        </div>

                        <div
                          className="divS"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Link to={`/detalle-producto/${id}`}>
                            <span className="sp1"></span>
                            <span className="sp2"></span>
                            <span className="sp3"></span>
                            <span className="sp4"></span>DETALLE
                          </Link>
                          <div
                            style={{ marginTop: "10px", paddingLeft: "10px" }}
                          >
                            <button
                              className="bt1"
                              onClick={() => {
                                user ? setIdProducto(id) : redirec();
                              }}
                            >
                              <span className="sp1"></span>
                              <span className="sp2"></span>
                              <span className="sp3"></span>
                              <span className="sp4"></span>AÑADIR
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </>
        ) : (
          <>
            {" "}
            {productosID.data &&
              productosID.data.map(
                ({
                  id,
                  imagen,
                  cantidad_cajon,
                  cantidad_caja,
                  medidas,
                  nombre,
                }) => (
                  <div className="cold-md-4 " key={id}>
                    <div className="card">
                      <div className="imgBx">
                        <img src={imagen} alt={nombre} />
                      </div>
                      <div className="contentBx">
                        <h4>{nombre}</h4>
                        <div className="size">
                          <h5>Medidas :</h5>

                          {medidas.map((med) => (
                            <span key={med.id}>{med.body}</span>
                          ))}
                        </div>
                        <div className="size">
                          <h5> Cajon :</h5>
                          <p>{cantidad_cajon}</p>
                        </div>
                        <div className="size">
                          <h5> Caja o Bolsa :</h5>
                          <p>{cantidad_caja}</p>
                        </div>

                        <div
                          className="divS"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Link to={`/detalle-producto/${id}`}>
                            <span className="sp1"></span>
                            <span className="sp2"></span>
                            <span className="sp3"></span>
                            <span className="sp4"></span>DETALLE
                          </Link>
                          <div
                            style={{ marginTop: "10px", paddingLeft: "10px" }}
                          >
                            <button
                              className="bt1"
                              onClick={() => {
                                user ? setIdProducto(id) : redirec();
                              }}
                            >
                              <span className="sp1"></span>
                              <span className="sp2"></span>
                              <span className="sp3"></span>
                              <span className="sp4"></span>AÑADIR
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </>
        )}
      </div>
      <PaginationItem currentPage={page} numberOfPages={numberOfPages} />
    </div>
  );
}

export default Productos;
