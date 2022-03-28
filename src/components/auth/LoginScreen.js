import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "Alejandro@gmail.com",
    lPassword: "123456",
  });

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Leandro",
    rEmail: "leandro@gmail.com",
    rPassword: "123456",
    rCPassword: "123456",
  });

  const { rName, rEmail, rPassword, rCPassword } = formRegisterValues;

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (rPassword !== rCPassword) {
      return Swal.fire("Error", "Las contraseñas no coinciden", "error");
    }

    dispatch(startRegister(rEmail, rPassword, rName));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                onChange={handleRegisterInputChange}
                name="rName"
                value={rName}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Correo"
                onChange={handleRegisterInputChange}
                name="rEmail"
                value={rEmail}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                onChange={handleRegisterInputChange}
                name="rPassword"
                value={rPassword}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Repita la contraseña"
                onChange={handleRegisterInputChange}
                name="rCPassword"
                value={rCPassword}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
