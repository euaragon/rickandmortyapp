import Card from './Card.jsx';
export default function Cards(props) {

  const {characters, onClose} = props;


return(
 <div>
   {characters.map((c) => (
    <Card
       detailId={c.id}
       name={c.name}
       species={c.species}
       gender={c.gender}
       image={c.image}
       key={c.id}
       status={c.status}
       onClose={() => onClose(c.id)}
     />
  ))}
 </div>
)
}