import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBthKpD7kk3tpMoaus_k2FgoPBMB33VBQo",
    authDomain: "projectdpm-76356.firebaseapp.com",
    projectId: "projectdpm-76356",
    storageBucket: "projectdpm-76356.appspot.com",
    messagingSenderId: "473746567072",
    appId: "1:473746567072:web:c4327f75b051b731d7fec5"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
