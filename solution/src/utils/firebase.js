import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApJXH5o1PXazmK6AU_qFsAo3gmdRdzZCI",
    authDomain: "fire-contact-project-12.firebaseapp.com",
    databaseURL: "https://fire-contact-project-12-default-rtdb.firebaseio.com",
    projectId: "fire-contact-project-12",
    storageBucket: "fire-contact-project-12.appspot.com",
    messagingSenderId: "454240655526",
    appId: "1:454240655526:web:32b3ad91caf88c5fa6fc67",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;



// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

// const firebase = initializeApp(firebaseConfig);

// export default firebase;
