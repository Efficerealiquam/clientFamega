import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { FETCH_GETLISTA_QUERY } from "../graphql/getQuerys";
import {
  UPDATE_PRODUCT_LISTA,
  DELETE_PRODUCT_LISTA,
  SENDLISTEMAIL_QUERY,
} from "../graphql/getMutations";
import { useForm } from "../hooks/hookForm";
import "../styles/lista-allProductos.css";

function ListaCarrito(props) {
  let listaData = "";

  const { values, onChange, onSubmit } = useForm(updateProductoLista, {
    proId: "",
    cantidad: "",
    medida: "",
  });
  // eslint-disable-next-line
  const [updateProList, { error }] = useMutation(UPDATE_PRODUCT_LISTA, {
    variables: values,
    update: (proxy, data) => {},
    onError(err) {
      console.log(err);
    },
  });
  const { data } = useQuery(FETCH_GETLISTA_QUERY);

  const [proId, setProId] = useState("");
  // eslint-disable-next-line
  const [deleteProList] = useMutation(DELETE_PRODUCT_LISTA, {
    update(proxy) {
      let id = proId;
      let data = proxy.readQuery({
        query: FETCH_GETLISTA_QUERY,
      });
      data.getListaActual.productos = data.getListaActual.productos.filter(
        (p) => p.id !== id
      );
      data.getListaActual.productosCount = data.getListaActual.productos.length;
      if (data.getListaActual.productosCount === 0) {
        props.history.push("/listacarrito");
      }
      proxy.writeQuery({ query: FETCH_GETLISTA_QUERY, data });
    },
    onError(err) {
      console.log(err);
    },
    variables: { proId: proId },
  });

  const [sendEmailLista] = useMutation(SENDLISTEMAIL_QUERY, {
    update(_, data) {
      console.log(data);
    },
  });

  const { user } = useContext(AuthContext);

  if (data) {
    listaData = data.getListaActual;
  }

  function updateProductoLista() {
    updateProList();
  }

  useEffect(() => {
    if (proId !== "") {
      deleteProList();
    }
    // eslint-disable-next-line
  }, [proId]);

  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingBottom: "600px" }}>
      <section className="sectionAllMarcas">
        <ul
          className="ulLista"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {listaData.productosCount > 0 ? (
            <>
              {listaData.productos &&
                listaData.productos.map((prod) => (
                  <li style={{ listStyle: "none" }} key={prod.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <form className="formList" onSubmit={onSubmit}>
                        <span className="numberItem" />
                        <span className="name">{prod.nombrePro} </span>

                        <input
                          className="form-control"
                          name="medida"
                          onChange={onChange}
                          type="text"
                          defaultValue={prod.medida}
                          placeholder="Medida"
                        />
                        <input
                          className="form-control"
                          name="cantidad"
                          onChange={onChange}
                          type="number"
                          defaultValue={prod.cantidad}
                          placeholder="Cantidad"
                        />
                        <button
                          className="btn btn-info"
                          type="submit"
                          onClick={() => (values.proId = prod.id)}
                        >
                          Actualizar
                        </button>
                      </form>
                      <div className="formList" style={{ paddingLeft: 0 }}>
                        <button
                          className="btn btn-danger"
                          onClick={() => setProId(prod.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </>
          ) : (
            <>
              <div className="mx-auto">
                <div className="card-body">
                  <h1>Hola {user.razonsocial}</h1>
                  <p className="lead">Aun no a agregado ni un producto</p>
                  <Link to="/" className="btn btn-success btn-block">
                    Agrege un Item
                  </Link>
                </div>
              </div>
            </>
          )}
          {listaData.productosCount > 0 && (
            <div>
              <button className="btn1" onClick={() => sendEmailLista()}>
                <span className="sp1" />
                <span className="sp2" />
                <span className="sp3" />
                <span className="sp4" /> Enviar a Cotizar
              </button>
            </div>
          )}
        </ul>
      </section>
    </div>
  );
}

export default ListaCarrito;
