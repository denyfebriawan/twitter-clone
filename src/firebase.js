import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBoLCl-2kqz5R4EiUAETuoJ0im7SN3ZpXg",
  authDomain: "auth-development-26044.firebaseapp.com",
  databaseURL: "https://auth-development-26044-default-rtdb.firebaseio.com",
  projectId: "auth-development-26044",
  storageBucket: "auth-development-26044.appspot.com",
  messagingSenderId: "175544333388",
  appId: "1:175544333388:web:e331277d04e87e7645b0e9"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  export const db = getDatabase(app)
  export {auth}