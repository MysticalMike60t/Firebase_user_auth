import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUDLSK7BD24MSeDOYE-rVu-9K6RIDEhWU",
  authDomain: "fir-authtesting-6c271.firebaseapp.com",
  projectId: "fir-authtesting-6c271",
  storageBucket: "fir-authtesting-6c271.appspot.com",
  messagingSenderId: "190068104335",
  appId: "1:190068104335:web:b07916f9a4d5fef396a4fa",
  measurementId: "G-HZWM85QSK4"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
