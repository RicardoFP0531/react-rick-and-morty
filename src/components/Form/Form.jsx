import React, { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation';

const Form = (props) => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
    
    setErrors(
      validation({
        ...userData,
        [name]: value
      })
    )

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <form onSubmit={handleSubmit}>
            <label>Ingresa tu email: </label>
            <input 
              value={userData.email} 
              name='email' 
              type="text" 
              placeholder='User mail'
              onChange={handleChange}
              />
              <br />
              <p className={styles.danger} >{errors.email}</p>
              
            <br />
            <label>Ingresa tu contraseña: </label>
            <input 
              value={userData.password} 
              name='password' 
              type="text" 
              placeholder='Password'
              onChange={handleChange}
              />
              <br/>
              <p className={styles.danger} >{errors.password}</p>
            <br />
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Form;