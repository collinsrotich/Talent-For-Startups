// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVeBvpeO3chksjkY-42lb3ne2WWalcQoc",
  authDomain: "talent-for-startups-578f3.firebaseapp.com",
  projectId: "talent-for-startups-578f3",
  storageBucket: "talent-for-startups-578f3.appspot.com",
  messagingSenderId: "921299654068",
  appId: "1:921299654068:web:dbe27bc28577d808ed0ee1",
  measurementId: "G-VW2W3Y3FQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);