import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from "../components/Button";
import { useDark } from "../context/dark";
import { useUser } from "../context/user";

// function index(){
//     return (
//         <div></div>
//     )
// }
// La anterior función, es exactamente igual a esta función que se crea con rafce, solo que esta utiliza la función flecha de JS.

const Index = () => {
  // const [variable1, setVariable1] = useState("Hola mundo, soy un estado");
  // const [valorInput, setValorInput] = useState("");
  const { userData, setUserData } = useUser();
  const { dark } = useDark();
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0);

  // const funcionClick = () => {
  // console.log("Hice clic en el botón");
  // setVariable1("Hola, ya es un valor diferente");
  //   setVariable1(valorInput)
  // };

  // const cambioInput = (e) => {
  // console.log("Alguien cambió el valor del imput", e.target.value);
  // setValorInput(e.target.value)
  // };
  //   return <div style={{backgroundColor: "red"}}>Hola mundo, soy la página de index</div>;

  // useEffect(() => {
  //Esta función se va a ejecutar cada vez que la variable1 cambie su valor.
  //   console.log("Cambio variable1 y su valor ahora es: ", variable1);
  // }, [variable1]);

  // useEffect(() => {
  //   console.log("Cambio valor1 y ahora es: ", valor1);
  // }, [valor1]);
  // useEffect(() => {
  //   console.log("Cambio valor2 y ahora es: ", valor2);
  // }, [valor2]);

  // useEffect(() => {
  //   console.log("Yo me ejecuto siempre");
  //   setSuma(1 + 1);
  // }); // Este es un useEffect sin array de dependencias, se ejecuta siempre y puede crear un bucle infinito, esto nunca se debe utilizar.

  useEffect(() => {
    console.log("Este es un useEffect que solo se ejecuta la primera vez");
    console.log("info del usuario", userData);
  }, [userData]); //Este useEffect solo se ejecuta una vez, muy util cuando se hacen consultas a la base de datos, se ejecuta siempre que se carga la aplicación.

  useEffect(() => {
    console.log(
      "Cambio alguno de los valores y ya son: ",
      "valor1: ",
      valor1,
      "valor2: ",
      valor2
    );
    setSuma(valor1 + valor2);
  }, [valor1, valor2]); // Este useEffect se va a ejecutar cuando valor1 cambie o también cuando valor2 cambie.

  return (
    <div className={`container ${dark ? "fondo-oscuro" : "fondo-claro"}`}>
      <div>
        {/* <div className="fondo-verde">
          <span>El valor de la variable es: </span>
          {variable1}
        </div> */}
        {/* <div>El valor del input es: {valorInput}</div> */}
        {/* <input
          value={valorInput}
          // onChange={cambioInput}
          onChange={(e) => {
            setValorInput(e.target.value);
          }}
          type="text"
          placeholder="Ingrese el nuevo valor para la variable"
        /> */}
        {/* <button onClick={funcionClic}>Haz Clic Acá!!!</button> */}
        {/* <button
          onClick={() => {
            setVariable1(valorInput);
          }}
        >
          Haz Clic Acá!!!
        </button> */}
      </div>
      <div>
        <input
          value={valor1}
          onChange={(e) => setValor1(parseInt(e.target.value))}
          placeholder="valor 1"
          type="number"
        />
        <input
          value={valor2}
          onChange={(e) => setValor2(parseInt(e.target.value))}
          placeholder="valor 2"
          type="number"
        />
        <span>La suma de los valores 1 y 2 es: {suma}</span>
        <button onClick={() => setUserData({ ...userData, suma: suma })}>
          Guardar Suma
        </button>
        {/* <Button texto="Guardar Suma" /> */}
        {/* <Button color="red" texto="Hola, soy el botón rojo" />
        <Button color="blue" texto="Hola, soy el botón azul" />
        <Button color="green" />
        <Button color="gray" /> */}
        <Link to="/admin/usuarios/mauricio">Ir a la página del usuario</Link>
        <Link to="/configuracion">Ir a la página de config</Link>
      </div>
    </div>
  );
};

export default Index;
