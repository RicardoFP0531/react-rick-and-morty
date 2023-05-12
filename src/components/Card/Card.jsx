import style from './Card.module.css';
import {Link} from 'react-router-dom'


function Card({id, onClose, name, species, gender, image, status, origin}) {
   return (
      <div className={style.containerCard} >
         <div className={style.containerDeleteButton}> 
            <button onClick={() => onClose(id)}>X</button>  
         </div>
         <div className={style.dataTextCard}>
            <Link to={`/detail/${id}`}>
               <h2> {name} </h2>
            </Link>
            <h3> {status}  </h3>
            <h3> {species} </h3>
            <h3> {gender}  </h3>
            <h3> {origin}  </h3>
          </div>
        <img className={style.img} src={image} alt={name}/>

      </div>
   );
}

export default Card;
