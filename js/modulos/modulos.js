/* CODIGO PARA SABER SI QUIERE ADOPTAR O DAR EN ADOPCION */

export const adoptante = "adoptante";
export const dador = "dador";

export function firstFunction(a) {

    if (a === "SI") {
        return adoptante;
    } else if (a === "NO") {
        return dador;
    }
}


/* LISTA DE MASCOTAS EN ADOPCION */

export class Mascota {
    constructor(nombre, raza, edad, ubicacion) {

        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }
}


/* FUNCION PARA ELEGIR MASCOTA */

export function miSwitch() {

    let perro = "C";

const ciclo = {
    C: new Mascota("CATA", "MESTIZA", 14, "..."),
    I: new Mascota("INDIA", "MESTIZA", 3, "..."),
    V: new Mascota("VICENTA", "CANICHE", 1, "..."),
    M: new Mascota("MALI", "PITBULL", 3, "..."),
    P: new Mascota("PAMPA", "MESTIZA", 1, "..."),
};

const final = ciclo[perro];
return final;
}