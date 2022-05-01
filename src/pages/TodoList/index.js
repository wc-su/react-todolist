import React, { useState } from "react";
import { Link } from "react-router-dom";

import Edit from "./components/Edit.js";
import List from "./components/List.js";

import "./index.scss";

const TodoList = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <Edit add={setData} />
      <List data={data} deleteData={setData} />
      <div className="back-container">
        <Link to="/" className="back__link">
          返回首頁
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
