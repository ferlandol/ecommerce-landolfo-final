import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNwm66HYo1rz0ltc0HW-ml-jIwIBDkMUU",  
    authDomain: "ecommerce-landolfo-90e27.firebaseapp.com",  
    databaseURL: "https://ecommerce-landolfo-90e27-default-rtdb.firebaseio.com",  
    projectId: "ecommerce-landolfo-90e27",  
    storageBucket: "ecommerce-landolfo-90e27.firebasestorage.app",  
    messagingSenderId: "830900465209",  
    appId: "1:830900465209:web:20bc6edbc9dd90fa41a7e8",  
    measurementId: "G-5C22KNBJST"  
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);