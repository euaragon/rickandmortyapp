import { ADD_FAV, DELETE_FAV } from "./types"

export function addFav(id){
    return{
        type: ADD_FAV,
        payload: id
    }
}

export function deleteFav(id){
    return{
        type: DELETE_FAV,
        payload: id
    }
}



// ACTIONS
// Crea dos actions-creators.

// Una que sea para agregar personajes a tu lista de favoritos. Recibe por parámetro el personaje.

// Otro que sea para eliminar un personaje de la lista de favoritos. Recibe por parámetro el id del personaje.

// NOTA: no olvides que el nombre que asignes en la propiedad "TYPE" de tu acción, debe coincidir exactamente con el nombre de los casos que hayas asignado en tu reducer.