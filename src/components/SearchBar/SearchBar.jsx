import style from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (evento) => {
      // console.log(evento)
      setId(evento.target.value);
   }


   return (
      <div className={style.searchContainer}>
         <input onChange={handleChange} value={id} type='search' placeholder="Buscar ID de Personaje"/>
         <button onClick={() => onSearch(id)}>Buscar</button>
      </div>
   );
}
