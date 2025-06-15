import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
    getFirestore
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAYBYU5lEH4wLuasnlnDDt8bDUAG0atXHA",
    authDomain: "sample-efb0e.firebaseapp.com",
    projectId: "sample-efb0e",
    storageBucket: "sample-efb0e.firebasestorage.app",
    messagingSenderId: "644677065475",
    appId: "1:644677065475:web:abd7c1a1dbe6dd2bc4e736"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()

export { db, auth }