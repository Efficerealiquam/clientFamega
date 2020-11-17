import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { UPDATE_SUB_CATEGORIA } from "../../../graphql/getMutationsAdmin";
import { useForm } from "../../../hooks/hookForm";

function EditSubcategoria(props) {
  const { catId, subId, nomSub } = useParams();
  //UPDATE_SUB_CATEGORIA
  const { onChange, onSubmit, values } = useForm(upSubCat, {
    nombre: "",
  });
  let nombreSub = "";
  if (values.nombre === "") {
    nombreSub = nomSub;
  } else {
    nombreSub = values.nombre;
  }

  const [updateSubCategoria] = useMutation(UPDATE_SUB_CATEGORIA, {
    onError(err) {
      console.log(err);
    },
    variables: { catId, subId, nombre: nombreSub },
  });

  function upSubCat() {
    updateSubCategoria();
    if (props.location.state) {
      props.history.push(
        "/all-subcategorias/" + catId + "/" + props.location.state.nombre
      );
    }
  }

  return (
    <div className="col-md-4 mx-auto" style={{ height: "850px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3>Editar SubCategoria</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                defaultValue={nomSub}
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
export default EditSubcategoria;
