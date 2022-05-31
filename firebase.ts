// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhKx1MIuG_v7IWLuPMHNanN15DFYgHgbU',
  authDomain: 'netflix-clone-yt-cc368.firebaseapp.com',
  projectId: 'netflix-clone-yt-cc368',
  storageBucket: 'netflix-clone-yt-cc368.appspot.com',
  messagingSenderId: '385252663469',
  appId: '1:385252663469:web:3409cd5ef0a154c586a624',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
