// import { StrictMode } from "react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { store } from "./redux/store.js";
// import { Provider } from "react-redux";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client"; // if using React 18+
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
