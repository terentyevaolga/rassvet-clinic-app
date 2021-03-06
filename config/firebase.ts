import {initializeApp} from "firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtKCluJaTXbTRYEDBoGj1h-8Nd1V7Tgmg",
    authDomain: "rassvet-87044.firebaseapp.com",
    projectId: "rassvet-87044",
    storageBucket: "rassvet-87044.appspot.com",
    messagingSenderId: "537561414398",
    appId: "1:537561414398:web:298f833115eb2d21a543af"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage(app);

export const firestore = getFirestore(app);