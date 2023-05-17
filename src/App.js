import './App.css';
import axios from 'axios';
import {useState} from 'react';
import {Routes, Route}  from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';


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
      <>
         <Nav onSearch={onSearch} />
         
            <Routes>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
               {/* <Route path='*' element={<Navigate to='/' replace/>}/> */}
               <Route path='*' element={<Error404/>}/>
            </Routes>

      </>
      
   );
}

export default App;
