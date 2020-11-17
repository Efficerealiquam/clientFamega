import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_PRODUCTO_DET_QUERY } from "../../../graphql/getQuerys";
import { DELETE_MEDIDA } from "../../../graphql/getMutationsAdmin";
import NewMedida from "../../../components/Admin/NewMedida";

function AllMedidas() {
  const { proId } = useParams();

  let producto = "";
  const { data } = useQuery(FETCH_PRODUCTO_DET_QUERY, {
    variables: { proId },
  });
  if (data) {
    producto = data.getProducto.medidas;
  }

  //DELETE_MEDIDA

  const [medId, setMedId] = useState("");
  const [deleteMed] = useMutation(DELETE_MEDIDA, {
    onError(err) {
      console.log(err);
    },
    variables: { proId, medId },
  });

  if (medId !== "") {
    deleteMed();
    setMedId("");
  }

  return (
    <div>
      <div
        className="container"
        style={{ textAlign: "center", padding: "25px" }}
      >
        <h1 style={{ color: "aliceblue", position: "relative" }}>Medidas</h1>
      </div>
      <div
        className="row"
        style={{
          justifyContent: "center",
          display: "flow-root",
          textAlign: "center",
        }}
      >
        <NewMedida />
        <br />
        <section className="sectionAllMarcas">
          <ul className="ulLista" style={{ alignItems: "center" }}>
            <li style={{ listStyle: "none" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="formList"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span className="name" style={{ fontWeight: 900 }}>
                    Medidas
                  </span>
                  <span className="name" style={{ fontWeight: 900 }}>
                    Opciones
                  </span>
                </div>
              </div>
            </li>

            {producto &&
              producto.map((med) => (
                <li style={{ listStyle: "none" }} key={med.id}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="formList" style={{ width: "100%" }}>
                      <span className="name" style={{ fontWeight: 900 }}>
                        {med.body}
                      </span>
                      <form style={{ paddingLeft: 0 }}>
                        <button
                          className="btn btn-danger"
                          type="submit"
                          onClick={() => setMedId(med.id)}
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
  );
}
export default AllMedidas;
