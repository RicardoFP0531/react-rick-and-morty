import style from './Error.module.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
        <div className={style.container}> 
            <h2 className={style.heading}> Error404</h2>
            <h3 className={style.subHeading}>PÁGINA NO ENCONTRADA</h3>
            <article>Lo sentimos, la página que esta intentando
              buscar no fue encontrada
            </article>
            <Link to='/home'>
              <button className={style.buttonHome}>Regresar al home</button>
            </Link>
            
            
        </div>
       
    </>
  )
}

export default Error404;