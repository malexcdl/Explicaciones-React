import React from "react";
import { useDark } from "../context/dark";
import { Link } from "react-router-dom";

const Configuracion = () => {
  const { dark, setDark } = useDark();
  return (
    <div>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Desactivar" : "Activar"} Modo Oscuro
      </button>
      <Link to="/">Ir al Home</Link>
    </div>
  );
};

export default Configuracion;
