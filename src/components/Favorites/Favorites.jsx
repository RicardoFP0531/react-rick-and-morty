import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Favorites = ({myFavorites}) => {
    
  return (
    <>
    <h1>Favorites</h1>
    {
        myFavorites?.map(personaje => {
            return (
                <Card 
                key={personaje.id}
                id={personaje.id}
                name={personaje.name}
                status={personaje.status}
                species={personaje.species}
                gender={personaje.gender}
                origin={personaje.origin.name}
                image={personaje.image}  
                />
            )
        })
     }
    </>
    
  )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

 
export default connect(mapStateToProps, null)(Favorites)