import React, { useState } from "react";

// import "./index.scss";

import Edit from "./Edit.js";
import List from "./List.js";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <Edit add={setData} />
      <List data={data} deleteData={setData} />
      <div className="back-container">
        <a href="./index.html" className="back__link">
          返回首頁
        </a>
      </div>
    </div>
  );
};

export default Home;
