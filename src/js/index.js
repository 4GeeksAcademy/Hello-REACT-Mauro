import React from "react"; // Import react into the bundle

import ReactDOM from "react-dom/client"; // import ReactDOM

import "../styles/index.css"; // Include your styles into the webpack bundle

import Home from "./component/Home.jsx"; // Import your own components


//                  // donde ?                    // que ?
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>); // Render your react application

