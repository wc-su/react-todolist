import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

// import Edit from "./components/Edit.js";
// import List from "./components/List.js";
import Home from "./components/Home.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
