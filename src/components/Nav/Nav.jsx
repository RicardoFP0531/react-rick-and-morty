import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css';


const Nav = ({onSearch, logout}) => {
    return (
        <>
        <div className={style.containerNav}>
         <Link to='/about'>
            <button className={style.buttonsNav} >About</button>
         </Link>
         <Link to='/home'>
            <button className={style.buttonsNav} >Home</button>
         </Link>
         <SearchBar onSearch={onSearch}/>
         
            <button onClick={logout} className={style.buttonsNav} >LogOut</button>
         
        </div>

        </>
    )
}


export default Nav;