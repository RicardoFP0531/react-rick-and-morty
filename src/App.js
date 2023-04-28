import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useState} from 'react';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id)
            if(exist) {alert('El id del personaje ya existe')}
            else {setCharacters((characters) => [...characters, data]);}
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((character) => character.id !== Number(id))
      )

   }


   return (
      <div>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>

      </div>
   );
}

export default App;
