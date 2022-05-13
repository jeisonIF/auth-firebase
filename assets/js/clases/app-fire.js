// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

console.log("iniciando app");
const firebaseConfig = {
    apiKey: "AIzaSyAzWq6Q-hNe53V33JOKVM74H2fO_qqWaUQ",
    authDomain: "tic-room-logbook.firebaseapp.com",
    projectId: "tic-room-logbook",
    storageBucket: "tic-room-logbook.appspot.com",
    messagingSenderId: "674406010389",
    appId: "1:674406010389:web:440be7b5f8b2079699881c",
    measurementId: "G-WMY9Z168NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;