import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { NEW_MARCA } from "../../graphql/getMutationsAdmin";
import { useFormAdmin } from "../../hooks/hookFormAdmi";

function NewMarca({ props }) {
  const { onChange, onSubmit, values } = useFormAdmin(addMarc, {
    nombre: "",
    made: "",
    descripcion: "",
    imagen: "",
  });

  const [addMarca] = useMutation(NEW_MARCA, {
    onError(err) {
      console.log(err);
    },
    variables: values,
  });

  function addMarc() {
    addMarca();
  }

  return (
    <div className="col-md-4 mx-auto m-4">
      <div className="cardPro">
        <div className="card-header">
          <h3>Nueva Marca</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="made"
                className="form-control"
                placeholder="Made"
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

export default NewMarca;
