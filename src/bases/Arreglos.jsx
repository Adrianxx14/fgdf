// Arreglos en js []

// const arreglo = new Array(100);

const arreglo = [];
arreglo[1] = 25;
arreglo.push(100);

console.log(arreglo);
const arreglo2 = [...arreglo];
arreglo2.push(23)
console.log(arreglo2,arreglo);

const arreglo3 = [...arreglo, 2, 'Adrian'];
console.log(arreglo3);

const arreglo4 = arreglo.map(function(x){
    return x*2;
})

console.log(arreglo4);
