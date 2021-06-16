import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtp0JzpvD_rRyk_Z2lsu6AQu2EzYKxh78",
    authDomain: "inventory-management-5764a.firebaseapp.com",
    databaseURL:
        "https://inventory-management-5764a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "inventory-management-5764a",
    storageBucket: "inventory-management-5764a.appspot.com",
    messagingSenderId: "189848437904",
    appId: "1:189848437904:web:eea51850e9817f48878415",
    measurementId: "G-43H6LJPGDS",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
