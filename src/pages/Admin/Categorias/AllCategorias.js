import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewCategoria from "../../../components/Admin/NewCategoria";
import { DELETE_CATEGORIA } from "../../../graphql/getMutationsAdmin";
import { FETCH_CATEGORIAS_QUERY } from "../../../graphql/getQuerys";
import "../../../styles/lista-allProductos.css";
function AllCategorias() {
  //DELETE_CATEGORIA

  const { marcaName } = useParams();
  let categorias = "";
  const { data } = useQuery(FETCH_CATEGORIAS_QUERY, {
    variables: { marca: marcaName },
    onError(err) {
      console.log(err);
    },
  });
  if (data) {
    categorias = { data: data.getCategorias };
  }
  /* DELETE CATEGORIA */
  const [catId, setCatId] = useState("");
  const [deleteCategoria] = useMutation(DELETE_CATEGORIA, {
    onError(err) {
      console.log(err);
    },
    variables: { catId },
  });

  if (catId !== "") {
    deleteCategoria();
    setCatId("");
  }

  return (
    <>
      <div>
        <div
          className="container"
          style={{ textAlign: "center", padding: "25px" }}
        >
          <h1 style={{ color: "aliceblue", position: "relative" }}>
            Categorias
          </h1>
        </div>

        <div
          className="row"
          style={{
            // height: "80vh",
            justifyContent: "center",
            display: "flow-root",
            textAlign: "center",
          }}
        >
          <Link
            style={{
              margin: "25px",
              position: "relative",
              height: "100px",
              color: "white",
            }}
            to="/all-marcas"
          >
            <i className="fas fa-arrow-left"> Atras </i>
          </Link>
          <br />
          {/* FORM PARA AGREGAR UNA NUEVA CATEGORIA */}
          <NewCategoria marcaName={marcaName} />
          {/* LISTA DE CATEGORIAS DE LA MARCA */}
          <section className="sectionAllMarcas" style={{ height: "90%" }}>
            <ul className="ulLista" style={{ alignItems: "center" }}>
              <li style={{ listStyle: "none" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className="formList"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <span
                      className="name"
                      style={{
                        fontWeight: 900,
                        paddingRight: "320px",
                        fontSize: "1.5em",
                      }}
                    >
                      Categorias
                    </span>
                    <span
                      className="name"
                      style={{ fontWeight: 900, fontSize: "1.5em" }}
                    >
                      Opciones
                    </span>
                  </div>
                </div>
              </li>
              {categorias.data &&
                categorias.data.map((cat) => (
                  <li style={{ listStyle: "none" }} key={cat.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="formList">
                        <span className="numberItem" />
                        <span className="name" style={{ fontWeight: 900 }}>
                          {cat.nombre}
                        </span>
                        <Link
                          to={{
                            pathname: "/edit-categoria/" + cat.id,
                            state: { nombre: cat.nombre },
                          }}
                          className="btn btn-info"
                        >
                          <i className="fas fa-edit"> Editar</i>
                        </Link>
                        <Link
                          to={{
                            pathname:
                              "/all-subcategorias/" + cat.id + "/" + marcaName,
                            state: { subcategorias: cat.subcategorias },
                          }}
                          className="btn btn-success"
                        >
                          <i className="fas fa-list-ul"> Subcategorias</i>
                        </Link>
                        <form style={{ paddingLeft: 0 }}>
                          <button
                            className="btn btn-danger"
                            type="submit"
                            onClick={() => setCatId(cat.id)}
                          >
                            Eliminar
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default AllCategorias;
