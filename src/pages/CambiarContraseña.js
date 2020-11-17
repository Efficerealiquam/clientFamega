import { useMutation } from "@apollo/react-hooks";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { CHANGE_PASSWORD } from "../graphql/getMutations";
import { useForm } from "../hooks/hookForm";
import "../styles/sesion.css";
export default function CambiarContraseña() {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //CHANGE_PASSWORD
  const { user } = useContext(AuthContext);
  let valuesUser = {};
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(cambiarPass, {
    id: "",
    password: "",
    newPassword: "",
  });

  if (values.id === "") {
    valuesUser.id = user.id;
  }
  if (values.password === "") {
    valuesUser.password = "";
  } else {
    valuesUser.password = values.password;
  }

  if (values.newPassword === "") {
    valuesUser.newPassword = "";
  } else {
    valuesUser.newPassword = values.newPassword;
  }

  const [res, setRes] = useState("");
  const [cambiarContraseña] = useMutation(CHANGE_PASSWORD, {
    update(_, data) {
      if (data) {
        setErrors({});
      }
      setRes(data);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: valuesUser,
  });

  function cambiarPass() {
    cambiarContraseña();
  }

  return (
    <section style={{ height: "90vh" }}>
      <div className="containerR">
        <div className="user singinBx">
          <div className="formBx " style={{ width: "100%" }}>
            {res === null || res === "" ? (
              <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
                <h2>Cambiar Contraseña</h2>
                <input
                  type="password"
                  name="password"
                  className={errors.password ? "input-error" : ""}
                  placeholder="Contraseña Actual"
                  onChange={onChange}
                />
                {errors.password ? (
                  <div className="valid-custom">{errors.password}</div>
                ) : (
                  ""
                )}
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Contraseña Nueva"
                  className={errors.newPassword ? "input-error" : ""}
                  onChange={onChange}
                />
                {errors.newPassword ? (
                  <div className="valid-custom">{errors.newPassword}</div>
                ) : (
                  ""
                )}
                <input
                  style={{ maxWidth: "200px" }}
                  type="submit"
                  defaultValue="Cambiar Contraseña"
                />
              </form>
            ) : (
              <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
                <h2>Hola {user.razonsocial}</h2>
                <p>Tu contraseña ha sido actualizada </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
