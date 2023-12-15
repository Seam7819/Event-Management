// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgpNwOdoDxbVKyxkwkLQrCvAnh_9E8MM",
  authDomain: "event-managemnet-react-auth.firebaseapp.com",
  projectId: "event-managemnet-react-auth",
  storageBucket: "event-managemnet-react-auth.appspot.com",
  messagingSenderId: "740115423493",
  appId: "1:740115423493:web:05a62d642d30e84788176c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;