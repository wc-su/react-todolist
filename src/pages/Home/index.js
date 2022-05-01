import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <Link to="/" className="title">
          React 練習專案
        </Link>
      </div>
      <div className="header">
        <h1>TodoList</h1>
      </div>
      <div className="start-container">
        <Link to="/list" className="start__link">
          Try it now
        </Link>
      </div>
    </div>
  );
};

export default Home;
