import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBICPFooH7cH1drdip8GuW2w2oh3kV7VWI",
    authDomain: "healthpass7827.firebaseapp.com",
    projectId: "healthpass7827",
    storageBucket: "healthpass7827.firebasestorage.app",
    messagingSenderId: "1081164739394",
    appId: "1:1081164739394:web:ba6a7f4428cf16872e4edb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);
