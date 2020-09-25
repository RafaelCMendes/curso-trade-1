import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

createApp(App).use(router).mount('#app')


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBTTOXpvR4guRCk31qtVXtgJIUCsr17hTw",
    authDomain: "testes-740a9.firebaseapp.com",
    databaseURL: "https://testes-740a9.firebaseio.com",
    projectId: "testes-740a9",
    storageBucket: "testes-740a9.appspot.com",
    messagingSenderId: "867390686459",
    appId: "1:867390686459:web:21f6415b8a1cf592f61c5e",
    measurementId: "G-PBLTF96MD0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();