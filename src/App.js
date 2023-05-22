import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Routes, Route, useLocation, useNavigate}  from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';


function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const EMAIL = 'ejemplo@correo.com';
   const PASSWORD = 'contra123';
   const navigate = useNavigate();

   function login (userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   function logout () {
         setAccess(false);
         navigate('/');
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


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

   const location = useLocation();
   // console.log(location)


   return (
      <>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>} 
         <hr />  
            <Routes>
               <Route exact path='/' element={<Form login={login} />}/>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
               <Route path='*' element={<Error404/>}/>
            </Routes>

      </>
      
   );
}

export default App;
