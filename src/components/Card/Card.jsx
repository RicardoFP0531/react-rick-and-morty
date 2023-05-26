import style from './Card.module.css';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {
   const {id, onClose, name, species, gender, image, status, origin, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      //si es falso lo removemos : else lo anadimos a los favoritos con todas las propiedades
      isFav ? removeFav(id) : addFav(props);
      //seteamos el estado local cuando sea lo contrario de isFav
      setIsFav(!isFav);
   }
// este hook solo se puede usar en componentes funcionales, simula el ciclo de vida de un componente
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.containerCard} >
         <div className={style.containerDeleteButton}> 
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
            <button className={style.deleteCard} onClick={() => onClose(id)}>X</button>  
         </div>
         <div className={style.dataTextCard}>
            <Link to={`/detail/${id}`}>
               <h2> {name} </h2>
            </Link>
            <h3> ID: {id}  </h3>
            <h3> Status: {status}  </h3>
            <h3> Species: {species} </h3>
            <h3> Gender: {gender}  </h3>
            <h3> Origin: {origin}  </h3>
          </div>
        <img className={style.img} src={image} alt={name}/>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
