import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_MARCA_ID_ADMIN } from "../../../graphql/getQuerys";
import { UPDATE_MARCA } from "../../../graphql/getMutationsAdmin";
import { useForm } from "../../../hooks/hookForm";

function EditMarca(props) {
  //GET_MARCA_ID_ADMIN
  const { marcaId } = useParams();
  let marca = "";
  const { data } = useQuery(GET_MARCA_ID_ADMIN, {
    variables: { marcaId },
  });
  if (data) {
    marca = data.getMarca;
  }
  let dataUpMarca = {};
  const { onChange, onSubmit, values } = useForm(upMarca, {
    id: "",
    nombre: "",
    made: "",
    descripcion: "",
    imagen: "",
  });
  /* Actualizamos los datos antes de enviarlos  */
  dataUpMarca.id = marcaId;

  if (values.nombre === "") {
    dataUpMarca.nombre = marca.nombre;
  } else {
    dataUpMarca.nombre = values.nombre;
  }
  if (values.made === "") {
    dataUpMarca.made = marca.made;
  } else {
    dataUpMarca.made = values.made;
  }
  if (values.descripcion === "") {
    dataUpMarca.descripcion = marca.descripcion;
  } else {
    dataUpMarca.descripcion = values.descripcion;
  }
  if (values.imagen === "") {
    dataUpMarca.imagen = marca.imagen;
  } else {
    dataUpMarca.imagen = values.imagen;
  }
  const [updateMarca] = useMutation(UPDATE_MARCA, {
    onError(err) {
      console.log(err);
    },
    variables: dataUpMarca,
  });
  function upMarca() {
    updateMarca();
    props.history.push("/all-marcas");
  }

  return (
    <div className="col-md-4 mx-auto" style={{ height: "850px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3>Editar Marca</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                defaultValue={marca.nombre}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="made"
                className="form-control"
                placeholder="Made"
                defaultValue={marca.made}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="url"
                name="imagen"
                className="form-control"
                placeholder="Imagen"
                defaultValue={marca.imagen}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="descripcion"
                className="form-control"
                defaultValue={marca.descripcion}
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

export default EditMarca;
