
export default function validation (userData) {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = new RegExp('[0-9]');
    const errors = {};

    //Validaciones de email usuario
    if(!regexEmail.test(userData.email)) {
        errors.email = 'El nombre del usuario debe ser un email'
    }
    if(!userData.email) {
        errors.email = 'El campo de user mail no debe ir vacio'
    }
    if(userData.email.length > 35) {
        errors.email = 'El nombre de usuario no puede tener mas de 35 caracteres'
    }
    //Validacion es de contrasena
    if(!regexPassword.test(userData.password)) {
        errors.password = 'La contrasena debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10 ) {
        errors.password = 'La contrasena debe tener entre 6 y 10 caracteres'
    }

    return errors;

}