import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { NEW_SUBCATEGORIA } from "../../graphql/getMutationsAdmin";
import { useFormAdmin } from "../../hooks/hookFormAdmi";

function NewSubcategoria({ catId }) {
  //GET_CATEGORIA_ID
  const { onChange, onSubmit, values } = useFormAdmin(addSubCat, {
    nombre: "",
  });

  const [addSubCategoria] = useMutation(NEW_SUBCATEGORIA, {
    update(_, data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
    variables: { catId, nombre: values.nombre },
  });
  function addSubCat() {
    addSubCategoria();
  }
  return (
    <div className="col-md-4 mx-auto" style={{ paddingTop: "25px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3> Nueva SubCategoria</h3>
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
                autoFocus
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
export default NewSubcategoria;
