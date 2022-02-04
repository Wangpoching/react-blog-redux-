import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDwEK2eVoaxdegcuZ-Qo04zI9TER4NIkhY',
  authDomain: 'react-blog-78cfd.firebaseapp.com',
  projectId: 'react-blog-78cfd',
  storageBucket: 'react-blog-78cfd.appspot.com',
  messagingSenderId: '307157674489',
  appId: '1:307157674489:web:46c0e4a3486a73cb273528',
  measurementId: 'G-B38KZEEWMZ'
}

// Initialize firebase instance
initializeApp(firebaseConfig)
const auth = getAuth()
const googleAuthProvider = new GoogleAuthProvider()

export { auth, googleAuthProvider }

