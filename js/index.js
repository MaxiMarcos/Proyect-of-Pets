import * as perritos from "./modulos/modulos.js";

/* CODIGO PARA SABER SI QUIERE ADOPTAR O DAR EN ADOPCION */
const pregunta = "SI";
const sum = perritos.firstFunction(pregunta);
console.log(sum);



/* LISTA DE MASCOTAS EN ADOPCION */
const search = perritos.lista;
console.log(search);



/* FUNCION PARA ELEGIR MASCOTA */
const ciclo = perritos.miSwitch();
console.log(ciclo);