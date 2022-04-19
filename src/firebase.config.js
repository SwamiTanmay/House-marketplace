import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE',
//   authDomain: 'house-marketplace-app-fb1d0.firebaseapp.com',
//   projectId: 'house-marketplace-app-fb1d0',
//   storageBucket: 'house-marketplace-app-fb1d0.appspot.com',
//   messagingSenderId: '832068369979',
//   appId: '1:832068369979:web:dce177da9bfc60a4b4e61e',
// }

const firebaseConfig = {
  apiKey: "AIzaSyDmhXufP6PEAoyJY9nH0scmJNOLhamRPJo",
  authDomain: "house-marketplace-projec-1041e.firebaseapp.com",
  projectId: "house-marketplace-projec-1041e",
  storageBucket: "house-marketplace-projec-1041e.appspot.com",
  messagingSenderId: "864506389482",
  appId: "1:864506389482:web:25c1273cf512d092424893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
