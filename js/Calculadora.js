import getBotones from "./Botones.js";

export default function getCalculadora() {
  let calculadoraDivTag = document.createElement("div");
  calculadoraDivTag.setAttribute("id", "calculadora");

  let entradaDiv = document.createElement("div");
  let entrada = document.createElement("input");
  entrada.setAttribute("class", "campo entrada");
  entradaDiv.appendChild(entrada);
  entradaDiv.setAttribute("class", "contenedor entradas");
  calculadoraDivTag.appendChild(entradaDiv);

  let salidaDiv = document.createElement("div");
  let salida = document.createElement("output");
  salida.setAttribute("class", "campo salida");
  salidaDiv.appendChild(salida);
  salidaDiv.setAttribute("class", "contenedor salidas");
  calculadoraDivTag.appendChild(salidaDiv);

  let funcionesDiv = document.createElement("div");
  funcionesDiv.setAttribute("class", "contenedor funciones");
  getBotones()
    .filter((boton) => boton.tipo === "funcion")
    .forEach((funcion) => {
      let funcionButton = crearBoton(funcion);
      funcionButton.setAttribute("class", "boton funcion");
      funcionesDiv.appendChild(funcionButton);
    });
  calculadoraDivTag.appendChild(funcionesDiv);

  let botoneraCentroDiv = document.createElement("div");
  botoneraCentroDiv.setAttribute("class", "teclado");

  let numerosDiv = document.createElement("div");
  numerosDiv.setAttribute("class", "contenedor numeros");
  getBotones()
    .filter((boton) => boton.tipo === "numero")
    .forEach((numero) => {
      let numeroButton = crearBoton(numero);
      numeroButton.setAttribute("class", "boton numero");
      numerosDiv.appendChild(numeroButton);
    });
  botoneraCentroDiv.appendChild(numerosDiv);

  let operadoresDiv = document.createElement("div");
  operadoresDiv.setAttribute("class", "contenedor operadores");
  getBotones()
    .filter((boton) => boton.tipo === "operador")
    .forEach((operador) => {
      let operadorButton = crearBoton(operador);
      operadorButton.setAttribute("class", "boton operador");
      operadoresDiv.appendChild(operadorButton);
    });
  botoneraCentroDiv.appendChild(operadoresDiv);

  let botonesDiv = document.createElement("div");
  botonesDiv.setAttribute("class", "contenedor acciones");
  getBotones()
    .filter((boton) => boton.tipo === "boton")
    .forEach((boton1) => {
      let botonButton = crearBoton(boton1);
      botonButton.setAttribute("class", "boton accion");
      botonesDiv.appendChild(botonButton);
    });
  botoneraCentroDiv.appendChild(botonesDiv);

  let botoneraInferiorDiv = document.createElement("div");
  botoneraInferiorDiv.setAttribute("class", "teclado");

  let calcularDiv = document.createElement("div");
  calcularDiv.setAttribute("class", "contenedor calculo");
  getBotones()
    .filter((boton) => boton.tipo === "calcular")
    .forEach((calcular) => {
      let calcularButton = crearBoton(calcular);
      calcularButton.setAttribute("class", "boton calcular");
      calcularDiv.appendChild(calcularButton);
    });
  botoneraInferiorDiv.appendChild(calcularDiv);

  calculadoraDivTag.appendChild(botoneraCentroDiv);
  calculadoraDivTag.appendChild(botoneraInferiorDiv);

  return calculadoraDivTag;
}

function crearBoton(boton) {
  let botonSpan = document.createElement("button");
  botonSpan.setAttribute("id", boton.nombre);
  botonSpan.innerHTML = boton.simbolo;
  return botonSpan;
}
