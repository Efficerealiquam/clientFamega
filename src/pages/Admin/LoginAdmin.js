import { useMutation } from "@apollo/react-hooks";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { LOGIN_ADMIN } from "../../graphql/getMutations";
import { useForm } from "../../hooks/hookForm";

function LoginAdmin(props) {
  /* PARA QUE AL NAVEGAR EL SCROLL ESTE EN TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const context = useContext(AuthContext);
  const [errorsL, setErrorsL] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    ruc: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_ADMIN, {
    update(_, { data: { loginAdmin: userData } }) {
      context.login(userData);
      props.history.push("/all-marcas");
    },
    onError(err) {
      setErrorsL(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });
  function loginUserCallback() {
    loginUser();
  }
  return (
    <div className="row" style={{ height: "90vh" }}>
      <div className="col-md-4 mx-auto" style={{ height: "850px" }}>
        <div className=" cardPro mt-4 text-center">
          <div className="card-header">
            <h1 style={{ color: "white" }}>Iniciar Sesion Administrador</h1>
          </div>
          <img
            src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/110313253_157887952532634_1935180613107615561_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeE_jF_ewhxSPP2irAhT3A8GOkL9iNg1IYM6Qv2I2DUhg4vORHDLp1VO4n7auSHEpaM&_nc_ohc=HuaDUWJz3AIAX8vaF0i&_nc_ht=scontent.flim1-2.fna&oh=20f334c085d8072b7ea43d7cf0fadc81&oe=5F9F1041"
            width="100%"
            className=" mx-auto d-block m-2 logo"
            alt="Logo"
          />
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  placeholder="RUC"
                  name="ruc"
                  onChange={onChange}
                  type="number"
                  className={
                    (errorsL.general ? "input-error" : "", "form-control")
                  }
                />
                {errorsL.general ? (
                  <div className="valid-custom">{errorsL.general}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <input
                  placeholder="Contraseña"
                  name="password"
                  className={
                    (errorsL.general ? "input-error" : "", "form-control")
                  }
                  type="password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Iniciar Sesion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginAdmin;
