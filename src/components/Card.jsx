import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "./redux/actions";
import "./card.css"


export function Card(props) {
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites.forEach(fav => {
         if (fav.detailId === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFav(props.id)
      } else {
         setIsFav(true)
         props.addFav(props)
      }
   }

   return (
      <div className="carta">
         <br/>
         {isFav ? (<button className="sin" onClick={handleFavorite}>🧡</button>) 
         : (<button className="sin" onClick={handleFavorite}>🤍</button>)
         }  
         <button onClick={props.onClose} className="cerrar"> X</button>
        <Link to={`/detail/${props.detailId}`}>
            <h1>{props.name}</h1>
       </Link>
         <br/>
         <hr/>
         <br/>
         <img src={props.image} alt={props.name} />
         <h2 className="izq">{props.species}</h2>
         <br/>
         <h2 className="izq">{props.gender}</h2>
         <br/>
         <h3 className="centro">{props.status}</h3>
         
         
      </div>
   );

   
}

export function mapDispatchToProps(dispatch) {
   return{
     addFav: function(id){
      dispatch(addFav(id))
     },
     deleteFav: function(id){
      dispatch(deleteFav(id))
     }
   }
 }

 export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Card)



// FAV BUTTON
// Ahora crearemos un botón para agregar y eliminar de favoritos! Para esto:

// Dirígete al componente Card. Aquí deberás crear una función mapDispatchToProps que contenga dos funciones: Una para agregar tu personaje favorito, y otra para eliminarlo. Ten en cuenta que deberás importar las actions que ya creaste.

// Luego conecta esta función con tu componente, y recibe ambas funciones despachadoras por props.

// Ahora crea un estado local en tu componente que se llame isFav, e inicialízalo en false.

// Crea una función en el cuerpo del componente llamada handleFavorite. Esta función estará dividida en dos partes:

// Si el estado isFav es true, entonces settea ese estado en false, y despacha la función deleteFavorite que recibiste por props pasándole el ID del personaje como argumento.
// Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que recibiste por props, pasándole props como argumento.
// Ahora te ayudaremos a crear un renderizado condicional. Si tu estado local isFav es true, entonces se mostrará un botón. Si es false, se mostrará otro botón. Para esto, copia y pega el siguiente código al comienzo del renderizado de tu componente (no te olvides de darle estilos).




// Una vez hecho esto, nos tenemos que asegurar que el status de nuestro estado local se mantenga aunque nos vayamos y volvamos al componente. Para esto vamos a agregar en este componete una función mapStateToProps. Esa función debe traer nuestro estado global myFavorites. Recíbelo por props dentro de tu componente.

// Este useEffect comprobará si el personaje que contiene esta Card ya está dentro de tus favoritos. En ese caso setteará el estado isFav en true. Cópialo y pégalo dentro de tu componente (no te olvides de importarlo).