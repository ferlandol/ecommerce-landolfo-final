import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const databaseURL = import.meta.env.VITE_FIREBASE_DATABASE_URL;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
    apiKey,  
    authDomain,  
    databaseURL,  
    projectId,  
    storageBucket,  
    messagingSenderId,  
    appId,  
    measurementId  
};
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);