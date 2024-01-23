import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsaP_TpqwQ2D0UdRv27Pszc-nd2puEw_Y",
  authDomain: "go-card-2a2f2.firebaseapp.com",
  projectId: "go-card-2a2f2",
  storageBucket: "go-card-2a2f2.appspot.com",
  messagingSenderId: "445850917179",
  appId: "1:445850917179:web:d33714129e318fc2027f1e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
