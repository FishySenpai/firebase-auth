import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiTNLnb0MeH9W0O8ORlh8dbS0FaKSC0Ps",
  authDomain: "fir-auth-fb502.firebaseapp.com",
  projectId: "fir-auth-fb502",
  storageBucket: "fir-auth-fb502.appspot.com",
  messagingSenderId: "933562675822",
  appId: "1:933562675822:web:f4b3ceec1df7ce0bf3ac7f",
  measurementId: "G-Z2RYYDKV3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
