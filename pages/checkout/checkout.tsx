import React from 'react'
import {
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  collectionGroup,
  Firestore,
} from "firebase/firestore";

import {db} from "frConect/client"

const collectionName = "users";

const addPay = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
      email:"test@gmail.com",
      tiempo: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const listUser = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

const getWebsites = () => getDocs(collection(db, collectionName));

const checkout = () => {
  return (
    <div>
      <h1>Hola mundo esta en la pagina de pago </h1>
      <button onClick={addPay}>dale</button>
      <button onClick={listUser}>Listar</button>
    </div>
  )
}

export default checkout