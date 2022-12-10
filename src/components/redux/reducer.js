import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./types";
const initialState = {
    allCharacters:[],
    myFavorites: []
  }
  
  function rootReducer(state = initialState, {type, payload}){
    switch (type) {
            case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload], //le agrego al arreglo todo lo que tiene el arreglo mas el payload
                allCharacters:[...state.allCharacters, payload]
            }
        
        case DELETE_FAV:
            const filtered = state.myFavorites.filter(p => p.id !== payload) // para eliminar un elemento, se arma un nuevo arreglo filtrando el elemento que se pasa por el payload, generando un nuevo arreglo con todos los elementos menos el del payload
                return{
                    ...state,
                    myFavorites: filtered //igualamos el arreglo original por el nuevo filtrado
                } 
          case FILTER:
            //const filterCopy = [...state.allCharacters]
            const filter = state.allCharacters.filter(p => p.gender === payload)
            return{
                ...state,
                myFavorites: payload === 'All' ? state.allCharacters : filter
            }

            case ORDER:
                const orderCopy = [...state.allCharacters]
                    const order = orderCopy.sort((a, b) => {
                        if(payload === "Ascendente") return a.id - b.id
                         else { return b.id - a.id}
                    })
                return{
                    ...state,
                    myFavorites: order
                }
    
        default:
            return state;
           
    }
  }
  
  export default rootReducer;

// Dentro del switch de tu reducer, crea un nuevo caso en el que podrás agregar el personaje que recibes por payload a tu estado "myFavorites".

// Crea un nuevo caso en el elimines el personaje que recibes por payload de tu estado inicial. Deberás filtrar el personaje a partir de su ID.

// No te olvides de tu caso default.