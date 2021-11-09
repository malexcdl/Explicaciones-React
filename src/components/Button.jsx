import React from "react";

const Button = ({ texto ="Cualquier Cosa", color = "coral" }) => {
  return (
    <button style={{ backgroundColor: color }} className="button">
      {texto}
    </button>
  );
};

export default Button;
