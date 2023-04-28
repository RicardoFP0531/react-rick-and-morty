import Card from '../Card/Card';

 function Cards(props) {
   const {characters, onClose} = props;
   return (
   <div style={{display:'flex', justifyContent: 'space-between'}}>
      {
         characters.map(({id, name, status, species, gender, origin, image}) => {
            return (
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}  
            onClose={() => onClose(id)}
            />
            ); 
         })
      }
   </div>
   
   )
};

export default Cards;