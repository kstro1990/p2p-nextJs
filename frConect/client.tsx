	// Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';
  import dotenv from 'dotenv';

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
      projectId: "ecommerce-p2p",
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_FIREBASE_APPID
    }
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export {db}




