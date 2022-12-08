import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "./redux/actions";
import Card from "./Card";


// Cada vez que se seleccione una opción de ordenamiento, despacha la action "orderCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

//Cada vez que se seleccione una opción de filtrado, despacha la action "filterCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

 function Favorites({myFavorites}) {

  const {onClose} = myFavorites;
  const dispatch = useDispatch()

function handleSelectOrder(e){
 dispatch(orderCards(e.target.value));
  }

  function handleSelectFilter(e){
    dispatch(filterCards(e.target.value))
  }

  return (
    <div>

    <div className="opciones">
      <select onChange={handleSelectOrder} name="order">
        <option value="Ascendente" selected>Ascendente</option>
        <option value="Descendente" >Descendente</option>
      </select> 
      <select onChange={handleSelectFilter} name="filter">
        <option value="Male" selected>Male</option>
        <option value="Female" >Female</option>
        <option value="Genderless" >Genderless</option>
        <option value="unknown">unknown</option>
      </select>   
    </div>
      {myFavorites.map((c, i) => (
        <Card
          id={c.id}
          key={i}
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          status={c.status}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}



export default connect(mapStateToProps)(Favorites);
