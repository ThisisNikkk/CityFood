import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8GqFQpeaAK4zOZH78y7DL7jdnU-k6GyA",
  authDomain: "restaurant-app-90465.firebaseapp.com",
  databaseURL: "https://restaurant-app-90465-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-90465",
  storageBucket: "restaurant-app-90465.appspot.com",
  messagingSenderId: "104655576747",
  appId: "1:104655576747:web:c3f2c56b7db93ebb39e1ee"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
