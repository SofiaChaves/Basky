import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaEIOgk-bqXbshUse8HcDwANbsyz47im8",
  authDomain: "basky-25144.firebaseapp.com",
  projectId: "basky-25144",
  storageBucket: "basky-25144.appspot.com",
  messagingSenderId: "155824497885",
  appId: "1:155824497885:web:6bfe6890837294dbee6734",
  measurementId: "G-N4LVEE4D2L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
