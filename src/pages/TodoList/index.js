import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

import Edit from "./components/Edit.js";
import List from "./components/List.js";
import Loading from "./components/Loading.js";
import DB from "./components/DB.js";

import "./index.scss";

const LoadingContext = React.createContext();
const LoadingUpdate = React.createContext();

const TodoList = () => {
  const [data, setData] = useState([]);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    changeLoadingText("資料讀取中");
    DB.getData().then((data) => {
      if (data) {
        setData(data);
      }
      changeLoadingText("");
    });
  }, []);

  const changeLoadingText = (text) => {
    setLoadingText(text);
    if (text === "") {
      setTimeout(() => {
        setLoadingText(text);
      }, 500);
    } else {
      setLoadingText(text);
    }
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <LoadingContext.Provider value={loadingText}>
        <LoadingUpdate.Provider value={changeLoadingText}>
          <Edit add={setData} />
          <List data={data} setData={setData} />
          <Loading />
        </LoadingUpdate.Provider>
      </LoadingContext.Provider>
      <div className="back-container">
        <Link to="/" className="back__link">
          返回首頁
        </Link>
      </div>
    </div>
  );
};

export default TodoList;
export { LoadingContext, LoadingUpdate };
