// Desestructuracion 

const vehiculo = {
    año: 2023,
    id: 123,
    marca: 'Nissan',
    modelo: 'Sentra',
};

// const modelo = 'March';

console.log(vehiculo.marca);

const {modelo:modelo2, id,año} = vehiculo;
console.log(modelo2, id, año);

const getModelo = (modelo) => {
    // return vehiculo.modelo;
    //const {modelo} = v;
    return modelo;
};

console.log(getModelo(vehiculo));

const user = {
    nickname:'Admin',
    name:'Adrian', 
    pass: '1432',
}

const _useContext = ({nickname, name, pass='9999'}) => {
    return {
        nombre: name,
        usuario: nickname,
        contrasena: pass,
        llaves : {
            publica: '23$%#TERG!"#$"',
            privada: '123456',
        }
    }
};

console.log(_useContext(user));

const resul = _useContext(user);

// const {llaves: {privada, publica}} = resul;
const {llaves} = resul;

const {publica, privada} = llaves;
console.log(publica, privada);

