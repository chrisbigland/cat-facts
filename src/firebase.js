// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMYhNv-5bcV5x4LxDUqD4g9Dx7lOmlCAU",
  authDomain: "cat-facts-d8a41.firebaseapp.com",
  projectId: "cat-facts-d8a41",
  storageBucket: "cat-facts-d8a41.appspot.com",
  messagingSenderId: "104808735019",
  appId: "1:104808735019:web:995ff991f1ed94f1d6a56e",
  measurementId: "G-CBB869JSET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);