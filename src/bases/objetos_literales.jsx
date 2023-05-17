// Objetos literales

const persona = {
    nombre : "Adrian",
    apellido : "Moreno",
    edad : 20,
    direccion : {
        calle: "Francisco J. Mina",
        no: 25,
        colonia: "Miguel Hidalgo",
        municipio: "Puebla",
    },
};

console.log(persona.apellido);
console.log(persona.direccion.colonia);

const persona2 = {...persona}; // operador de propagación

console.log(persona.edad);
persona2.edad = 25;
console.log(persona2.edad);
