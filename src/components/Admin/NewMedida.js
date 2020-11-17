import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { ADD_MEDIDA } from "../../graphql/getMutationsAdmin";
import { useFormAdmin } from "../../hooks/hookFormAdmi";

function NewMedida() {
  const { proId } = useParams();
  //ADD_MEDIDA
  const { onChange, onSubmit, values } = useFormAdmin(addMed, {
    medida: "",
  });

  let inMedida = {};
  inMedida.medida = values.medida;
  inMedida.proId = proId;

  const [addMedida] = useMutation(ADD_MEDIDA, {
    onError(err) {
      console.log(err);
    },
    variables: inMedida,
  });
  function addMed() {
    addMedida();
  }
  return (
    <div className="col-md-4 mx-auto" style={{ paddingTop: "25px" }}>
      <div className="cardPro">
        <div className="card-header">
          <h3> Nueva Medida</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="medida"
                className="form-control"
                placeholder="Medida"
                autoFocus
                onChange={onChange}
                required
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

export default NewMedida;
