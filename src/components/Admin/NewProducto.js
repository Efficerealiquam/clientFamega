import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { ADD_NEW_PRODUCTO } from "../../graphql/getMutationsAdmin";
import { useFormAdmin } from "../../hooks/hookFormAdmi";

function NewProducto() {
  const { subId } = useParams();
  const { onChange, onSubmit, values } = useFormAdmin(addPro, {
    nombre: "",
    descripcion: "",
    cantidad_cajon: "",
    cantidad_caja: "",
    imagen: "",
    subcategoria: "",
  });

  let newProduc = values;
  newProduc.subcategoria = subId;

  const [addProducto] = useMutation(ADD_NEW_PRODUCTO, {
    onError(err) {
      console.log(err);
    },
    variables: newProduc,
  });
  function addPro() {
    addProducto();
  }
  return (
    <div className="col-md-4 mx-auto" style={{ paddingTop: "25px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3> Nuevo Producto</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                autoFocus
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="cantidad_cajon"
                className="form-control"
                placeholder="Cantidad Cajon"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="cantidad_caja"
                className="form-control"
                placeholder="Cantidad Caja"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="url"
                name="imagen"
                className="form-control"
                placeholder="Imagen"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="descripcion"
                className="form-control"
                placeholder="Descripcion"
                defaultValue={""}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                style={{ backgroundColor: "#009879" }}
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProducto;
