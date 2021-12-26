// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   getDocs,
//   collection,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgkcpvuQiVlKljlnSG-diHUEuTbbKjc8A",
  authDomain: "forschool-79f25.firebaseapp.com",
  projectId: "forschool-79f25",
  storageBucket: "forschool-79f25.appspot.com",
  messagingSenderId: "758169627388",
  appId: "1:758169627388:web:e49545efe307d2d2a30579",
  measurementId: "G-RYLTPDZCB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
// // const auth = getAuth();

// // collection ref
const colRef = collection(db, "books");

const q = query(colRef, orderBy("createdAt"));

const unsubCol = onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset();
    console.log();
  });
});
