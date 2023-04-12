import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'

import { getFirestore } from 'firebase/firestore'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCqpNNrP2QF3xelI37jGLQZmDFZd8_65FA',
  authDomain: 'eg-app-c88d1.firebaseapp.com',
  projectId: 'eg-app-c88d1',
  storageBucket: 'eg-app-c88d1.appspot.com',
  messagingSenderId: '738629373032',
  appId: '1:738629373032:web:eb5329418024bc75dfbfdd'
}

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app()


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
