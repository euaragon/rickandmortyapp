import { connect } from "react-redux";
import Card from "./Card";

 function Favorites({myFavorites}) {

  const {onClose} = myFavorites;
  return (
    <div>


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
