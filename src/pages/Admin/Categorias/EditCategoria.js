import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_CATEGORIA } from "../../../graphql/getMutationsAdmin";
import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/hookForm";

function EditCategoria(props) {
  const { catId } = useParams();

  const { onChange, onSubmit, values } = useForm(upCat, {
    nombre: "",
  });
  let nameCat = "";

  if (values.nombre === "") {
    if (props.location.state) {
      nameCat = props.location.state.nombre;
    }
  } else {
    nameCat = values.nombre;
  }

  const [updateCategoria] = useMutation(UPDATE_CATEGORIA, {
    onError(err) {
      console.log(err);
    },
    variables: { catId, nombre: nameCat },
  });
  function upCat() {
    updateCategoria();
    if (props.location.state) {
      props.history.push("/all-categorias/" + props.location.state.marcaName);
    }
  }

  return (
    <div className="col-md-4 mx-auto" style={{ height: "850px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3>Editar Categoria</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                defaultValue={
                  props.location.state && props.location.state.nombre
                }
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

export default EditCategoria;
