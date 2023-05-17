// Async - Await


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


const getHeroeByIdAsyn2 = async (id) =>{ 
    try{
        const heroe = await getHeroeByIdAsyn(id);
        console.log(heroe);
    }catch(error){
        console.log(error);
    }
}

getHeroeByIdAsyn2(4);