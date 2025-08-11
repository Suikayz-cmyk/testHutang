// Ganti dengan konfigurasi Firebase kamu
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5zCrx_QvjibmxxHtCDtv95MuMQG3fBS4",
  authDomain: "pencatatanhutang.firebaseapp.com",
  projectId: "pencatatanhutang",
  storageBucket: "pencatatanhutang.firebasestorage.app",
  messagingSenderId: "995467103688",
  appId: "1:995467103688:web:8df4f756e347aa7381c4fd",
};
// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
