import React, { useState } from "react";

//Uso del UseState
const Pruebas = () => {
  const [valorInput, setValorInput] = useState(""); //Esta variable permite recibir el valor de entrada del input y actualizarla dinámicamente.
  const [valorClick, setValorClick] = useState(""); //Esta variable se actualiza dependiendo de la variable de entrada solo cuando se hace clic.
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  let suma = parseInt(num1) + parseInt(num2)
  let resta = parseInt(num1) - parseInt(num2)
  let multiplicacion = parseInt(num1) * parseInt(num2)
  let division = parseInt(num1) / parseInt(num2)
  return (
    <div>
      <div>
        <span>Esta es la página de pruebas.</span>
        <input
          type="text"
          onChange={(e) => {
            setValorInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setValorClick(valorInput);
          }}
        >
          Enviar Datos
        </button>
        <div>
          Aqui se muestra un texto asignado desde un input y se actualiza
          miestras se escribe: {valorInput}
        </div>
        <div>
          Aqui se muestra el valor cuando se hace clic, y se muestra lo que se
          ha escrito en el input: {valorClick}
        </div>
      </div>
      <div>
          <span>Aquí se van a sumar 2 numeros: </span>
          <input type="number" onChange={(e) => setNum1(e.target.value)} placeholder="numero 1" />
          <input type="number" onChange={(e) => setNum2(e.target.value)} placeholder="numero 2" />
          <span> El resultado de la suma de los dos números es: {suma}</span>
          <span> El resultado de la resta de los dos números es: {resta}</span>
          <span> El resultado de la multiplicación de los dos números es: {multiplicacion}</span>
          <span> El resultado de la división de los dos números es: {division}</span>
      </div>
    </div>
  );
};

export default Pruebas;
