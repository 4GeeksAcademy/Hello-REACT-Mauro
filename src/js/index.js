import React from "react"; // Import react into the bundle

import ReactDOM from "react-dom/client"; // import ReactDOM

import "../styles/index.css"; // Include your styles into the webpack bundle

import HomeFinal from "./component/HomeFinal.jsx"; // Import your own components


//                  // donde ?                    // que ?
ReactDOM.createRoot(document.getElementById('app')).render(<HomeFinal />); // Render your react application

