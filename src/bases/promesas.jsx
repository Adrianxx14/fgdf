// Promesas en JS
/* Las promesas son asincronas por
definicón*/

import {getHeroeById, /*getCompany*/ } from "./bases/importacion_exportacion";

const getHeroeByIdAsyn = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
           // console.log("Han pasado 2 segundos");
           const heroe = getHeroeById(id); 
           
           if(heroe){
            // Cambia estado a fuifull
            resolve(heroe); 
           }
           else
            reject('No se encontro el heroe');
        }, 2000);
       });
};

// En caso de que la respuesta es exitosa
getHeroeByIdAsyn(2)
.then(heroe => {console.log(heroe);})
.catch(error => console.log(error))

