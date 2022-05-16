import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDru4eZx2xqImbLLr2FHF43RNhnBR5rGUY",
  authDomain: "market-aff6d.firebaseapp.com",
  projectId: "market-aff6d",
  storageBucket: "market-aff6d.appspot.com",
  messagingSenderId: "995292850400",
  appId: "1:995292850400:web:2d133b4c26b03251604885",
  measurementId: "G-DQWZNSV3DC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);