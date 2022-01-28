import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFigkS8jQMfV_zp_W7Jq8IojDd78VMrC8",
    authDomain: "food-and-drink-app.firebaseapp.com",
    projectId: "food-and-drink-app",
    storageBucket: "food-and-drink-app.appspot.com",
    messagingSenderId: "538205569403",
    appId: "1:538205569403:web:780f870c75f3e9aef47dde"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;