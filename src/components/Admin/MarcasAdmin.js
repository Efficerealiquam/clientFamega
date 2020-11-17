import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DELETE_MARCA } from "../../graphql/getMutationsAdmin";
import { GET_MARCAS_ADMIN } from "../../graphql/getQuerys";

function MarcasAdmin() {
  const { data } = useQuery(GET_MARCAS_ADMIN);
  let marcas = "";
  if (data) {
    marcas = { data: data.getMarcas };
  }

  const [marcaId, setMarcaId] = useState("");

  const [deleteMarca] = useMutation(DELETE_MARCA, {
    onError(err) {
      console.log(err);
    },
    variables: { marcaId },
  });

  if (marcaId !== "") {
    deleteMarca();
    setMarcaId("");
  }

  return (
    <>
      <div style={{ height: "90vh" }}>
        <div
          style={{
            textAlign: "center",
            padding: "25px",
            position: "relative",
            height: "150px",
          }}
        >
          <h1
            style={{
              color: "white",
              position: "relative",
              textAlign: "center",
            }}
          >
            Marcas
          </h1>
          <a
            style={{ margin: "25px", position: "relative", color: "white" }}
            href="/administrador/marcas/add"
          >
            <i className="fas fa-plus-square"> Nueva Marca</i>
          </a>
          <br />
        </div>
        <div className="row" style={{ margin: "0 100px" }}>
          {marcas.data &&
            marcas.data.map((marca) => (
              <div
                className="cold-md-3"
                style={{ padding: "25px" }}
                key={marca.id}
              >
                <div className="cardPro" style={{ width: "18rem" }}>
                  <div className="card-header">
                    <h4 className="card-title d-flex justify-content-between align-item-center">
                      <p>
                        <b>Nombre :{marca.nombre}</b>
                      </p>

                      <Link to={"/edit-marca/" + marca.id}>
                        <i className="fas fa-edit" />
                      </Link>
                    </h4>

                    <Link
                      style={{ paddingLeft: "10%" }}
                      to={"/all-categorias/" + marca.nombre}
                    >
                      <i className="fas fa-list-ul"> Categorias </i>
                    </Link>
                  </div>
                  <img
                    style={{ width: "100%", heigth: "80px", objFit: "cover" }}
                    src={marca.imagen}
                    alt="imgMarca"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p>
                      <b>Made :</b> {marca.made}
                    </p>
                    <p>
                      <b>Descripcion:</b>
                    </p>
                    <p>{marca.descripcion}</p>
                    <form>
                      <button
                        className="btn btn-danger btn-block btn-sm"
                        type="submit"
                        onClick={() => setMarcaId(marca.id)}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default MarcasAdmin;
