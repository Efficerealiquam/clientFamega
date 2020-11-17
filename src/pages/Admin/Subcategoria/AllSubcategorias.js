import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewSubcategoria from "../../../components/Admin/NewSubcategoria";
import { DELETE_SUB_CATEGORIA } from "../../../graphql/getMutationsAdmin";
import { GET_CATEGORIA_ID } from "../../../graphql/getQuerys";

function AllSubcategorias() {
  const { catId, nomMarca } = useParams();

  let subcategorias = "";
  const { data } = useQuery(GET_CATEGORIA_ID, {
    variables: { catId },
  });
  if (data) {
    subcategorias = data.getCategoriaID.subcategorias;
  }

  const [subId, setSubId] = useState("");
  const [deleteSubCategoria] = useMutation(DELETE_SUB_CATEGORIA, {
    onError(err) {
      console.log(err);
    },
    variables: { catId, subId },
  });

  if (subId !== "") {
    deleteSubCategoria();
    setSubId("");
  }

  return (
    <div>
      <div
        className="container"
        style={{ textAlign: "center", padding: "25px" }}
      >
        <h1 style={{ color: "aliceblue", position: "relative" }}>
          SubCategorias
        </h1>
      </div>
      <div
        className="row"
        style={{
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
          to={"/all-categorias/" + nomMarca}
        >
          <i className="fas fa-arrow-left"> Atras </i>
        </Link>
        <br />
        <NewSubcategoria catId={catId} />
        <section className="sectionAllMarcas">
          <ul className="ulLista" style={{ alignItems: "center" }}>
            <li style={{ listStyle: "none" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="formList"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span
                    className="name"
                    style={{ fontWeight: 900, paddingRight: "320px" }}
                  >
                    Subcategorias
                  </span>
                  <span className="name" style={{ fontWeight: 900 }}>
                    Opciones
                  </span>
                </div>
              </div>
            </li>
            {subcategorias
              ? subcategorias.map((sub) => (
                  <li style={{ listStyle: "none" }} key={sub.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="formList">
                        <span className="numberItem" />
                        <span className="name" style={{ fontWeight: 900 }}>
                          {sub.nombre}
                        </span>
                        <Link
                          to={{
                            pathname:
                              "/edit-subcategoria/" +
                              catId +
                              "/" +
                              sub.id +
                              "/" +
                              sub.nombre,
                            state: { nombre: sub.nombre },
                          }}
                          className="btn btn-info"
                        >
                          <i className="fas fa-edit"> Editar</i>
                        </Link>

                        <Link
                          to={
                            "/all-productos/" +
                            catId +
                            "/" +
                            sub.id +
                            "/" +
                            nomMarca
                          }
                          className="btn btn-success"
                        >
                          <i className="fas fa-list-ul"> Productos</i>
                        </Link>
                        <form style={{ paddingLeft: 0 }}>
                          <button
                            className="btn btn-danger"
                            type="submit"
                            onClick={() => setSubId(sub.id)}
                          >
                            Eliminar
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                ))
              : ""}
          </ul>
        </section>
      </div>
    </div>
  );
}
export default AllSubcategorias;
