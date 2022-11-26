import { Link } from "react-router-dom";
import "./card.css"


export default function Card(props) {
   return (
      <div class="carta">
         <br/>
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
