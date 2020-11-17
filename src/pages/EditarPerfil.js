import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks/hookForm";
import "../styles/sesion.css";
import { FECHT_DATOS_USER } from "../graphql/getQuerys";
import { EDITAR_PERFIL } from "../graphql/getMutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
function EditarPerfil(props) {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user } = useContext(AuthContext);
  let userData = "";
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(updateUser, {
    telefono: "",
    telefono2: "",
    direccion: "",
    correo: "",
  });
  //FECHT_DATOS_USER
  let valuesUser = {};
  const { data } = useQuery(FECHT_DATOS_USER);
  if (data) {
    userData = data.getDatosUser;
  }
  /* mandar los mismo valores por defecto si es q no los cambia */
  if (values.telefono === "") {
    valuesUser.telefono = userData.telefono;
  } else {
    valuesUser.telefono = values.telefono;
  }
  if (values.telefono2 === "") {
    valuesUser.telefono2 = userData.telefono2;
  } else {
    valuesUser.telefono2 = values.telefono2;
  }
  if (values.direccion === "") {
    valuesUser.direccion = userData.direccion;
  } else {
    valuesUser.direccion = values.direccion;
  }
  if (values.correo === "") {
    valuesUser.correo = userData.correo;
  } else {
    valuesUser.correo = values.correo;
  }
  //EDITAR_PERFIL
  const [updateUserData] = useMutation(EDITAR_PERFIL, {
    update(_, data) {
      if (data) {
        setErrors({});
      }
      props.history.push("/editarperfil");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: valuesUser,
  });
  function updateUser() {
    updateUserData();
  }

  return (
    <section style={{ height: "90vh" }}>
      <div style={{ height: "700px" }} className="containerR">
        <div className="user singinBx">
          {user && (
            <div className="formBx " style={{ width: "100%" }}>
              <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
                <h2>Editar Perfil</h2>
                <input
                  type="text"
                  name="ruc"
                  placeholder="RUC"
                  defaultValue={userData.ruc}
                  disabled
                />
                <input
                  type="text"
                  name="razonsocial"
                  placeholder="Razon Social"
                  defaultValue={userData.razonsocial}
                  disabled
                />
                <input
                  type="number"
                  name="telefono"
                  placeholder="Telefono"
                  defaultValue={userData.telefono}
                  className={errors.telefono ? "input-error" : ""}
                  onChange={onChange}
                />
                {errors.telefono ? (
                  <div className="valid-custom">{errors.telefono}</div>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  name="telefono2"
                  placeholder="Telefono 2"
                  defaultValue={userData.telefono2}
                  className={errors.telefono2 ? "input-error" : ""}
                  onChange={onChange}
                />
                {errors.telefono2 ? (
                  <div className="valid-custom">{errors.telefono2}</div>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  name="direccion"
                  placeholder="Direccion"
                  defaultValue={userData.direccion}
                  className={errors.direccion ? "input-error" : ""}
                  onChange={onChange}
                />
                {errors.direccion ? (
                  <div className="valid-custom">{errors.direccion}</div>
                ) : (
                  ""
                )}
                <input
                  type="email"
                  name="correo"
                  placeholder="Email"
                  defaultValue={userData.correo}
                  className={errors.correo ? "input-error" : ""}
                  onChange={onChange}
                />
                {errors.correo ? (
                  <div className="valid-custom">{errors.correo}</div>
                ) : (
                  ""
                )}

                <input
                  className="btn1"
                  type="submit"
                  defaultValue="Actualizar"
                />
                <p
                  style={{
                    fontFamily: '"Josefin Sans", sans-serif',
                    textTransform: "none",
                    fontSize: "1em",
                  }}
                  className="signup"
                >
                  Deseas cambiar tu contraseña?
                  <Link to="/cambiar-contraseña" className="a-btn-Click">
                    Click aqui.
                  </Link>
                </p>
                <p
                  style={{
                    fontFamily: '"Josefin Sans", sans-serif',
                    textTransform: "none",
                    fontSize: "1em",
                    margin: "0px",
                  }}
                  className="signup"
                ></p>
                {/*   <p
                  style={{
                    fontFamily: '"Josefin Sans", sans-serif',
                    textTransform: "none",
                    fontSize: "1em",
                    marginTop: "16px",
                  }}
                  className="signup"
                >
                  Crear un usuario para Sucursal o tienda
                  <Link
                    to="/usuarios/newUsuarioSucursal"
                    className="a-btn-Click"
                  >
                    Click aqui.
                  </Link>
                </p> */}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default EditarPerfil;
