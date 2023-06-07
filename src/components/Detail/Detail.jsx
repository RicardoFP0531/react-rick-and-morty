import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

const Detail = () => {

    let {id} = useParams();

    const [character, setCharacter] = useState({});

    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return (
        <>
        
         <div className={styles.mainContainer}>
          
          {
            character?(
            <div className={styles.detailContainer}>
                <div className={styles.info}>
                  <h2>Status: {character.status}</h2>
                  <h2>Species: {character.species}</h2>
                  <h2>Gender: {character.gender}</h2>
                  <h2>Origin: {character.origin?.name}</h2>
                </div>
                <div className={styles.header}>
                    <h2>ID: {character.id}</h2>
                    <h2>Name:   {character.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            </div>
            ) : ('')
          }
            
         </div>  

        </>
    )

}

export default Detail;