import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewProducto from "../../../components/Admin/NewProducto";
import { DELETE_PRODUCTO } from "../../../graphql/getMutationsAdmin";
import { GET_PRODUCTOS_ID } from "../../../graphql/getQuerys";

function AllProductos() {
  const { catId, subId, nomMarca } = useParams();
  //GET_PRODUCTOS_ID
  let productos = "";
  const { data } = useQuery(GET_PRODUCTOS_ID, {
    variables: { subId },
  });
  if (data) {
    productos = data.getProductos;
  }

  let urlBack = "/all-productos/" + catId + "/" + subId + "/" + nomMarca;
  //DELETE_PRODUCTO

  const [proId, setProId] = useState("");
  const [deleteProducto] = useMutation(DELETE_PRODUCTO, {
    onError(err) {
      console.log(err);
    },
    variables: { proId },
  });

  if (proId !== "") {
    deleteProducto();
    setProId("");
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "25px",
          position: "relative",
          height: "150px",
        }}
      >
        <h1 style={{ color: "aliceblue" }}>Productos</h1>

        <br />
        <Link
          style={{
            margin: "25px",
            position: "relative",
            height: "100px",
            color: "white",
          }}
          to={"/all-subcategorias/" + catId + "/" + nomMarca}
        >
          <i className="fas fa-arrow-left"> Atras </i>
        </Link>
      </div>
      <NewProducto />
      <div className="row" style={{ margin: 0 }}>
        {productos &&
          productos.map(
            ({
              id,
              imagen,
              cantidad_cajon,
              cantidad_caja,
              medidas,
              nombre,
              descripcion,
            }) => (
              <div className="cold-md-3" style={{ padding: "25px" }} key={id}>
                <div
                  className="cardPro"
                  style={{ width: "18rem", marginLeft: "25px" }}
                >
                  <div className="card-header">
                    <h6 className="card-title justify-content-between align-item-center">
                      <p>
                        <b>Nombre : {nombre}</b>
                      </p>
                    </h6>
                    <div>
                      <Link to={"/edit-productos/" + id}>
                        <i className="fas fa-edit">Editar</i>
                      </Link>

                      <Link
                        style={{ paddingLeft: "10%" }}
                        to={{
                          pathname: "/all-medidas/" + id,
                          state: {
                            urlBack: urlBack,
                          },
                        }}
                      >
                        <i className="fas fa-list-ul"> Medidas </i>
                      </Link>
                    </div>
                  </div>
                  <img
                    style={{ width: "100%", heigth: "80px", objFit: "cover" }}
                    src={imagen}
                    className="card-img-top"
                    alt="imgProducto"
                  />
                  <div className="card-body">
                    <p>
                      <b>Cantidad_cajon :</b> {cantidad_cajon}
                    </p>
                    <p>
                      <b>Cantidad_caja :</b> {cantidad_caja}
                    </p>
                    <p>
                      <b>Medidas :</b>
                      {medidas.map((med) => (
                        <span key={med.id}>{med.body}</span>
                      ))}
                    </p>
                    <p>
                      <b>Descripcion:</b>
                    </p>
                    <p>{descripcion}</p>
                    <form>
                      <button
                        className="btn btn-danger btn-block btn-sm"
                        type="submit"
                        onClick={() => setProId(id)}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
export default AllProductos;
