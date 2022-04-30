import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="home-container">
      <div className="navbar">
        <a className="title">React 練習專案</a>
      </div>
      <div className="header">
        <h1>TodoList</h1>
      </div>
      <div className="start-container">
        <a className="start__link" href="./todolist.html">
          Try it now
        </a>
      </div>
    </div>
  </React.StrictMode>
);
