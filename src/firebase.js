import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA80aimTk0d2V_Cm-9uMOGCVTmeeFvctq4",
	authDomain: "ecommerce-d0669.firebaseapp.com",
	projectId: "ecommerce-d0669",
	storageBucket: "ecommerce-d0669.appspot.com",
	messagingSenderId: "446189472049",
	appId: "1:446189472049:web:c635ce668a7902d1cc4810"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = app.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();