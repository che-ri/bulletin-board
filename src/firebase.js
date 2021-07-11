import firebase from "firebase/app";
//firebase의 기능들입니다.

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5uxLOVSqojzbMytJdKVbThJ8ywcbrayQ",
    authDomain: "bulletin-board-dc722.firebaseapp.com",
    projectId: "bulletin-board-dc722",
    storageBucket: "bulletin-board-dc722.appspot.com",
    messagingSenderId: "1005841609635",
    appId: "1:1005841609635:web:60345026f1ad541c1c6016",
    measurementId: "G-KDZV9K9758",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export { firestore };
