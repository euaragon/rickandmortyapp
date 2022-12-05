import { ADD_FAV, DELETE_FAV } from "./types";
const initialState = {
    myFavorites: []
  }
  
  function rootReducer(state = initialState, {type, payload}){
    switch (type) {
            case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload] //le agrego al arreglo todo lo que tiene el arreglo mas el payload
            }
        
        case DELETE_FAV:
            const filtered = state.myFavorites.filter((p) => p.detailId !== payload) // para eliminar un elemento, se arma un nuevo arreglo filtrando el elemento que se pasa por el payload, generando un nuevo arreglo con todos los elementos menos el del payload
                return{
                    ...state,
                    myFavorites: filtered //igualamos el arreglo original por el nuevo filtrado
                } 
          
    
        default:
            return state;
           
    }
  }
  
  export default rootReducer;

// Dentro del switch de tu reducer, crea un nuevo caso en el que podrás agregar el personaje que recibes por payload a tu estado "myFavorites".

// Crea un nuevo caso en el elimines el personaje que recibes por payload de tu estado inicial. Deberás filtrar el personaje a partir de su ID.

// No te olvides de tu caso default.