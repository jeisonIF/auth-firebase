import Sesiones from "../clases/inicio.js"; 
import UI from "../clases/UI.js"; 

const ui = new UI();
const adminSesiones = new Sesiones();

export function newSign(e){
    e.preventDefault();
    adminSesiones.sign('jeison',123);
}

export function logout(e){
    e.preventDefault();
    adminSesiones.sign('jeison',123);
}
