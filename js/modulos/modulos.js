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

export const lista = [

    {nombre: "cata", raza: "mestizo", edad: 14, ubicacion: "",},
    {nombre: "india", raza: "mestizo", edad: 3, ubicacion: "",},
    {nombre: "vicenta", raza: "caniche", edad: 1, ubicacion: "",},
    {nombre: "mali", raza: "pitbull", edad: 3, ubicacion: "",},
    {nombre: "pampa", raza: "mestizo", edad: 1, ubicacion: "",}
]


/* FUNCION PARA ELEGIR */

export function miSwitch() {
    let perro = "I";

const ciclo = {
    C: lista.find (o => o.nombre === "cata"),
    I: lista.find (o => o.nombre === "india"),
    V: lista.find (o => o.nombre === "vicenta"),
    M: lista.find (o => o.nombre === "mali"),
    P: lista.find (o => o.nombre === "pampa"), 
};

const final = ciclo[perro];
return final;
}