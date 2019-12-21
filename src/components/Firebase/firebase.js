// ------------------------------------------------------------------------- //
import app from "firebase/app";
require("dotenv").config();

// var firebaseConfig = {
//   apiKey: "AIzaSyATwOKvHYIVmryHs7w-cuzewqMXkcsjT1k",
//   authDomain: "react-firebase-auth-app-c39f5.firebaseapp.com",
//   databaseURL: "https://react-firebase-auth-app-c39f5.firebaseio.com",
//   projectId: "react-firebase-auth-app-c39f5",
//   storageBucket: "react-firebase-auth-app-c39f5.appspot.com",
//   messagingSenderId: "116258933712",
//   appId: "1:116258933712:web:1f20f34dc1b193ed8cc7d5"
// };

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID
};

console.log("something");

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
