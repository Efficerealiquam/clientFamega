import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER, LOGIN_USER } from "../graphql/getMutations";
import { useForm } from "../hooks/hookForm";
import { AuthContext } from "../context/auth";

function ComRegistrarse({ props }) {
  function toggleForm() {
    var containerR = document.querySelector(".containerR");
    containerR.classList.toggle("active");
  }

  const context = useContext(AuthContext);
  /* Registrar Usuario */
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    ruc: "",
    razonsocial: "",
    telefono: "",
    telefono2: "",
    password: "",
    confirmPassword: "",
    direccion: "",
    correo: "",
  });

  const [addUser] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  /* Iniciar Session */
  const [errorsL, setErrorsL] = useState({});

  const useFormLogin = useForm(loginUserCallback, {
    ruc: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrorsL(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: useFormLogin.values,
  });
  function loginUserCallback() {
    loginUser();
  }

  return (
    <div>
      {/* ------- Registrar Usuario -------- */}
      <div
        className="containerR"
        style={
          Object.keys(errors).length > 3
            ? { height: "900px", marginTop: "150px" }
            : { height: "750px" }
        }
      >
        <div className="user singinBx">
          <div className="imgBx">
            <img
              src="https://taladrando.net/wp-content/uploads/2020/04/person-using-dewalt-cordless-impact-driver-on-brown-board-1249611-1024x683.jpg"
              alt=""
            />
          </div>
          <div className="formBx">
            <form onSubmit={onSubmit}>
              <h2>Crear una cuenta Nueva</h2>

              <input
                placeholder="RUC"
                name="ruc"
                value={values.ruc}
                className={errors.ruc ? "input-error" : ""}
                onChange={onChange}
                type="number"
              />
              {errors.ruc ? (
                <div className="valid-custom">{errors.ruc}</div>
              ) : (
                ""
              )}

              <input
                placeholder="Razon Social"
                name="razonsocial"
                value={values.razonsocial}
                className={errors.razonsocial ? "input-error" : ""}
                onChange={onChange}
                type="text"
              />
              {errors.razonsocial ? (
                <div className="valid-custom">{errors.razonsocial}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Telefono"
                name="telefono"
                value={values.telefono}
                className={errors.telefono ? "input-error" : ""}
                onChange={onChange}
                type="number"
              />
              {errors.telefono ? (
                <div className="valid-custom">{errors.telefono}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Telefono 2"
                name="telefono2"
                value={values.telefono2}
                className={errors.telefono2 ? "input-error" : ""}
                onChange={onChange}
                type="number"
              />
              {errors.telefono2 ? (
                <div className="valid-custom">{errors.telefono2}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Contraseña"
                name="password"
                value={values.password}
                className={errors.password ? "input-error" : ""}
                onChange={onChange}
                type="password"
              />
              {errors.password ? (
                <div className="valid-custom">{errors.password}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Confirmar Contraseña"
                name="confirmPassword"
                value={values.confirmPassword}
                className={errors.confirmPassword ? "input-error" : ""}
                onChange={onChange}
                type="password"
              />
              {errors.confirmPassword ? (
                <div className="valid-custom">{errors.confirmPassword}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Direccion"
                name="direccion"
                value={values.direccion}
                className={errors.direccion ? "input-error" : ""}
                onChange={onChange}
                type="text"
              />
              {errors.direccion ? (
                <div className="valid-custom">{errors.direccion}</div>
              ) : (
                ""
              )}
              <input
                placeholder="Correo"
                name="correo"
                value={values.correo}
                className={errors.correo ? "input-error" : ""}
                onChange={onChange}
                type="email"
              />
              {errors.correo ? (
                <div className="valid-custom">{errors.correo}</div>
              ) : (
                ""
              )}
              <input type="submit" defaultValue="Registrarse" />
              <p className="signup">
                Ya tengo una cuenta{" "}
                <span onClick={() => toggleForm()}>Iniciar Sesion</span>
              </p>
            </form>
          </div>
        </div>
        {/* ------- Iniciar Session -------- */}
        <div className="user singupBx">
          <div className="formBx">
            <form onSubmit={useFormLogin.onSubmit}>
              <h2>Iniciar Sesion</h2>
              <input
                placeholder="RUC"
                name="ruc"
                value={useFormLogin.values.ruc}
                className={errorsL.ruc || errorsL.general ? "input-error" : ""}
                onChange={useFormLogin.onChange}
                type="number"
              />
              {errorsL.ruc ? (
                <div className="valid-custom">{errorsL.ruc}</div>
              ) : (
                ""
              )}

              <input
                placeholder="Contraseña"
                name="password"
                value={useFormLogin.values.password}
                className={errorsL.password ? "input-error" : ""}
                onChange={useFormLogin.onChange}
                type="password"
              />
              {errorsL.password ? (
                <div className="valid-custom">{errorsL.password}</div>
              ) : (
                ""
              )}

              <input type="submit" defaultValue="Iniciar Sesion" />
              <p className="signup">
                No tienes una cuenta?{" "}
                <span onClick={() => toggleForm()}>Registrarse</span>
              </p>
              <p
                style={{
                  fontFamily: '"Josefin Sans", sans-serif',
                  textTransform: "none",
                }}
                className="signup"
              >
                Olvidates tu Contraseña?{" "}
                <Link to="/olvide-pass" className="a-btn-Click">
                  Click aqui
                </Link>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://taladrando.net/wp-content/uploads/2020/04/person-using-dewalt-cordless-impact-driver-on-brown-board-1249611-1024x683.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComRegistrarse;
