import React, { useContext } from "react";

import { LoadingContext } from "../index.js";
import classNames from "classnames";

const Loading = () => {
  const loadingText = useContext(LoadingContext);

  const loadingClass = classNames("loading-wrap", {
    visible: loadingText === "" ? false : true,
  });

  return (
    <div className={loadingClass}>
      <div className="loading-container">
        <p className="loading__text">{loadingText}</p>
        <div className="loading__circle"></div>
      </div>
    </div>
  );
};

export default Loading;
