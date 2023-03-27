import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0ODakHexLLAgl6cxdjthLgYqKG8Awj10",
  authDomain: "ecommerce-66c77.firebaseapp.com",
  projectId: "ecommerce-66c77",
  storageBucket: "ecommerce-66c77.appspot.com",
  messagingSenderId: "1063539254193",
  appId: "1:1063539254193:web:91846faf3559a606c69390"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth , app};
