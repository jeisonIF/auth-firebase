
//console.log(GUI);

const signForm = document.querySelector("#sign-form"),
    mensaje = document.querySelector("#mensaje"),
    logout = document.querySelector("#logout");

import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import APP from './clases/app-fire.js'

class Sessions {
    constructor() {
        // recibe la info de la app de firebase
        this.app = APP;
        this.auth = getAuth(this.app);
    }
    async newSession(email, password) {
        //console.log('Nueva sesion');
        console.log({ email, password });
        try {
            await signInWithEmailAndPassword(this.auth, email, password)
            ui.imprimirAlerta(`Bienbenido ${email}`, 'success');
            console.log("inicio de sesion");
            console.log(this.auth);
            sessionStorage.setItem("user", this.auth);
            setTimeout(() => {
                $('#signModal').modal('hide');

            }, 3000);
        }
        catch (error) {
            ui.imprimirAlerta(`A ocurrido un error : ${error}`, 'error')
            showLoginError(error)
        }

    }
    async exitSession(auth){
        return await signOut(auth);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12', (tipo === 'error' ? 'alert-danger' : 'alert-success'));

        divMensaje.textContent = mensaje;

        document.querySelector('.modal-body').insertBefore(divMensaje, document.querySelector('#sign-form'));

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }
    
}
const ui = new UI();
const adminSessions = new Sessions();


window.addEventListener("DOMContentLoaded", () => {
    console.log("Cargando Eventos");
    signForm.addEventListener("submit", newSession);
    mensaje.addEventListener("click", sendMessage)
    logout.addEventListener("click", exitSession)
}/* async (e) => {} */);


function sendMessage(e) {
    e.preventDefault();
    mensaje.setAttribute("href", "https://wa.me/573132786104?text=I'm%20interested%20in%20your%20car%20for%20sale");
    alert("Enviar mensaje whatsapp")
}
function newSession(e) {
    e.preventDefault();
    const email = signForm["sign-email"].value;
    const password = signForm["sign-password"].value;
    if (email == '' || password == '') {
        ui.imprimirAlerta('Todos los campos son obligarorios', 'error');
        return;
    }
    adminSessions.newSession(email, password);

};
function exitSession (e) {
    e.preventDefault();
    let user = sessionStorage.getItem("user");
    console.log(user)
    console.log(adminSessions.exitSession(user));

    console.log("Fin de sesion");
}
