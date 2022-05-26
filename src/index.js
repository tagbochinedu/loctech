import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import "./index.css";
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
  
);

reportWebVitals();
