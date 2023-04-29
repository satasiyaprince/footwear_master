import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCS_RbvvmyIJW0s6cmaw0GXepK30ZiSjNY",
  authDomain: "ecommerce-9ac9d.firebaseapp.com",
  projectId: "ecommerce-9ac9d",
  storageBucket: "ecommerce-9ac9d.appspot.com",
  messagingSenderId: "714618809156",
  appId: "1:714618809156:web:b13c90870c74f44581c511",
  measurementId: "G-2MM56F4WL3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider}