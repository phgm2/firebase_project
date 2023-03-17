import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6W-nYzHUF6SGTmZPEkbgx8jV6hS2wWOs",
    authDomain: "cursosp-c0e56.firebaseapp.com",
    projectId: "cursosp-c0e56",
    storageBucket: "cursosp-c0e56.appspot.com",
    messagingSenderId: "859416501097",
    appId: "1:859416501097:web:6548e5e5b474896410bbf8",
    measurementId: "G-4RE4DC6M3P"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export { db };