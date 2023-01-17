import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLO1AFUAOe5zvLZx8KhPb-khdz32OOs_Y",
    authDomain: "fire-contact-app-3c98e.firebaseapp.com",
    databaseURL: "https://fire-contact-app-3c98e-default-rtdb.firebaseio.com",
    projectId: "fire-contact-app-3c98e",
    storageBucket: "fire-contact-app-3c98e.appspot.com",
    messagingSenderId: "154887475529",
    appId: "1:154887475529:web:1621e8a747bb35293f8a98",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;