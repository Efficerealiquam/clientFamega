import { useMutation } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import { FORGOT_PASSWORD } from "../graphql/getMutations";
import { useForm } from "../hooks/hookForm";
import "../styles/sesion.css";
function OlvidemiPass() {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { onChange, onSubmit, values } = useForm(forgotPass, {
    correo: "",
  });
  const [res, setRes] = useState("");
  const [errors, setErrors] = useState({});
  //FORGOT_PASSWORD
  const [forgotPassword] = useMutation(FORGOT_PASSWORD, {
    update(_, data) {
      setRes(data);
      //  props.history.push("/");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function forgotPass() {
    forgotPassword();
  }

  return (
    <section style={{ height: "90vh" }}>
      <div className="containerR">
        <div className="user singinBx">
          <div className="formBx " style={{ width: "100%" }}>
            {res === null || res === "" ? (
              <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
                <h2>Ingresa tu correo de usuario</h2>
                <p>Se te enviara a tu correo tu nueva Contraseña</p>
                <input
                  placeholder="Correo de Usuario"
                  name="correo"
                  values={values.correo}
                  className={errors.correo || errors.user ? "input-error" : ""}
                  onChange={onChange}
                  type="email"
                />
                {errors.correo || errors.user ? (
                  <div className="valid-custom">
                    {errors.correo || errors.user}
                  </div>
                ) : (
                  ""
                )}
                <input type="submit" defaultValue="Enviar" />
              </form>
            ) : (
              <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
                <h2>Revise su correo</h2>
                <p>Se te a enviado tu nueva Contraseña a tu correo </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default OlvidemiPass;
