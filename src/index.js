import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.js";
// import StarRating from "./StarsRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
    />
    <StarRating maxRating={5} size={24} color="blue" defaultRating={3} /> */}
  </React.StrictMode>
);
