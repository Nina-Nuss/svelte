// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmio4GSFnZcAsRL_sXD9VYmlJ2XRol-yc",
    authDomain: "test-58f68.firebaseapp.com",
    projectId: "test-58f68",
    storageBucket: "test-58f68.firebasestorage.app",
    messagingSenderId: "803838171445",
    appId: "1:803838171445:web:39676dcc8955980752947c",
    measurementId: "G-RYEFV8LKCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Only initialize Analytics in the browser (it requires window/cookies)
let analytics;
isSupported().then((supported) => {
    if (supported) {
        analytics = getAnalytics(app);
    }
});
export { analytics };