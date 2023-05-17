// Importancion de recursos

import companies, {heroes} from "../data/heroes";

//console.log(heroes, companies);

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id == id);
}

//console.log(getHeroeById(3));

export const getCompany = (id) => {
    return companies.find(compania => compania.id == id);
}

//console.log(getCompany(1));
