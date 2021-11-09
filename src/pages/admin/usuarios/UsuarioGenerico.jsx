import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../../context/user";
import { Link } from "react-router-dom";

const UsuarioGenerico = () => {
  let params = useParams();
  const { userData } = useUser();
  console.log("params", params);
  return (
    <div>
      Página de: {params.nombreusuario} la suma es {userData.suma}
      <Link to="/">Ir al Index</Link>
    </div>
  );
};

export default UsuarioGenerico;
