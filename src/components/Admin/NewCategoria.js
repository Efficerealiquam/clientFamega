import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useFormAdmin } from "../../hooks/hookFormAdmi";
import { NEW_CATEGORIA } from "../../graphql/getMutationsAdmin";

function NewCategoria({ marcaName }) {
  const { onChange, onSubmit, values } = useFormAdmin(addCat, {
    nombre: "",
  });

  let inputCat = {};
  inputCat.nombre = values.nombre;
  inputCat.marca = marcaName;

  const [addCategoria] = useMutation(NEW_CATEGORIA, {
    update(_, data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
    variables: inputCat,
  });
  function addCat() {
    addCategoria();
  }
  return (
    <div className="col-md-4 mx-auto" style={{ paddingTop: "25px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3> Nueva categoria</h3>
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

export default NewCategoria;
