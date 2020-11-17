import React, { useContext, useEffect, useState } from "react";
import "../styles/swiper.min.css";
import "../styles/detalle-producto.css";
import { FETCH_PRODUCTO_DET_QUERY } from "../graphql/getQuerys";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import SwiperProductos from "../components/SwiperProductos";
import { ADD_PRODUCT_LISTA } from "../graphql/getMutations";
import { AuthContext } from "../context/auth";

function DetalleProducto(props) {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //FETCH_PRODUCTO_DET_QUERY
  const { proId } = useParams();
  const { user } = useContext(AuthContext);

  const [idProducto, setIdProducto] = useState("");

  let producto = "";
  const { data } = useQuery(FETCH_PRODUCTO_DET_QUERY, {
    variables: { proId },
    onError(err) {
      console.log(err);
    },
  });
  if (data) {
    producto = data.getProducto;
  }

  // eslint-disable-next-line
  const [addProducto, { error }] = useMutation(ADD_PRODUCT_LISTA, {
    variables: { proId: idProducto, cantidad: "", medida: "" },
    onError(err) {
      // console.log(err);
    },
  });
  useEffect(() => {
    addProducto();
    // eslint-disable-next-line
  }, [idProducto]);

  function redirec() {
    props.history.push("/iniciarsesion");
  }
  return (
    <>
      <section className="sectionDetallePro">
        <div className="contentDetallePro">
          {producto && (
            <>
              <h1>{producto.nombre}</h1>
              <br />
              <h4>
                Medidas :{" "}
                {producto.medidas.map((med, i) => (
                  <span key={i}>{med.body}, </span>
                ))}
              </h4>
              <br />
              <h4>Cantidad en Cajon : {producto.cantidad_cajon}</h4>
              <br />
              <h4>Cantidad en Caja : {producto.cantidad_caja}</h4>
              <br />
              <br />
              <p>Descripcion : {producto.descripcion} </p>
              <br />
              <img
                className="bulb"
                src={producto.imagen}
                alt={producto.nombre}
              />
              <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
                <button
                  // to={"/detalle-producto/" + producto.id}
                  className="btn2"
                  onClick={() => {
                    user ? setIdProducto(producto.id) : redirec();
                  }}
                >
                  <span className="sp1"></span>
                  <span className="sp2"></span>
                  <span className="sp3"></span>
                  <span className="sp4"></span>AÑADIR
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      {producto && (
        <SwiperProductos
          subId={producto.subcategoria}
          setIdProducto={setIdProducto}
          redirec={redirec}
          user={user}
        />
      )}
    </>
  );
}
export default DetalleProducto;
