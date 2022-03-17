import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand ms-3">Leandro</span>
      <button className="btn btn-outline-danger me-3">
        <i className="fas fa-sign-out"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
