// Desestructuracion de arreglos

const personajes = ['Mazinger', 'Ultraman','Goku','Vegeta'];

console.log(personajes[2]);

const [,,, p2] = personajes;

console.log(p2);

const arreglo = () => {
    return ['AS8CD', 1234];
};

const [letras, numeros] = arreglo();
console.log(letras, numeros);

const _useState = (valor) => {
    return [valor, () => 'Esta es una funcion' ];
}

console.log(_useState('Adrian'));

/* Desestructura el arreglo que proviene
de invocar la función _useState()
1. el valor Desetructuralo como "nombre"
2. la funcion desestructurala como "getMensaje"
*/

const [nombre, getMensaje] = _useState('Adrian');
console.log(nombre, getMensaje());