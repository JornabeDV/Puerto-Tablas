// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMeguA-1gc4h3RADbE_josHnB3CWoGQE",
  authDomain: "mitiendajornabedv.firebaseapp.com",
  projectId: "mitiendajornabedv",
  storageBucket: "mitiendajornabedv.appspot.com",
  messagingSenderId: "479817076107",
  appId: "1:479817076107:web:ab43309241ab2413bcf38e",
  measurementId: "G-GZF84VWHQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app