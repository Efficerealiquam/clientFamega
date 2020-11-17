import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";

import { FETCH_PRODUCTO_DET_QUERY } from "../../../graphql/getQuerys";
import { UPDATE_PRODUCTO } from "../../../graphql/getMutationsAdmin";
import { useForm } from "../../../hooks/hookForm";

function EditProducto() {
  const { proId } = useParams();

  let producto = "";
  const { data } = useQuery(FETCH_PRODUCTO_DET_QUERY, {
    variables: { proId },
  });
  if (data) {
    producto = data.getProducto;
  }

  let upProducto = {};
  const { onChange, onSubmit, values } = useForm(upProduc, {
    nombre: "",
    descripcion: "",
    cantidad_cajon: "",
    cantidad_caja: "",
    imagen: "",
  });
  upProducto.id = proId;
  if (values.nombre === "") {
    upProducto.nombre = producto.nombre;
  } else {
    upProducto.nombre = values.nombre;
  }

  if (values.descripcion === "") {
    upProducto.descripcion = producto.descripcion;
  } else {
    upProducto.descripcion = values.descripcion;
  }

  if (values.cantidad_cajon === "") {
    upProducto.cantidad_cajon = producto.cantidad_cajon;
  } else {
    upProducto.cantidad_cajon = values.cantidad_cajon;
  }

  if (values.cantidad_caja === "") {
    upProducto.cantidad_caja = producto.cantidad_caja;
  } else {
    upProducto.cantidad_caja = values.cantidad_caja;
  }

  if (values.imagen === "") {
    upProducto.imagen = producto.imagen;
  } else {
    upProducto.imagen = values.imagen;
  }

  const [updateProducto] = useMutation(UPDATE_PRODUCTO, {
    onError(err) {
      console.log(err);
    },
    variables: upProducto,
  });
  function upProduc() {
    updateProducto();
  }

  return (
    <div className="col-md-4 mx-auto" style={{ height: "850px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3>Editar Producto</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                defaultValue={producto.nombre}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="cantidad_cajon"
                className="form-control"
                placeholder="cantidad_cajon"
                defaultValue={producto.cantidad_cajon}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="cantidad_caja"
                className="form-control"
                placeholder="Made"
                defaultValue={producto.cantidad_caja}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="url"
                name="imagen"
                className="form-control"
                placeholder="Imagen"
                defaultValue={producto.imagen}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="descripcion"
                className="form-control"
                defaultValue={producto.descripcion}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProducto;
