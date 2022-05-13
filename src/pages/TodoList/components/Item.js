import React, { useContext, useState } from "react";
import classNames from "classnames";
import DB from "./DB.js";
import { LoadingUpdate } from "../index.js";

import deleteIcon from "../images/delete.png";

const Item = ({ id, note, date, time, checked, setData }) => {
  const itemClass = classNames("item-container", {
    checked: checked,
  });

  const changeLoadingText = useContext(LoadingUpdate);

  function deleteItem() {
    changeLoadingText("資料刪除中");
    DB.deleteData(id).then((result) => {
      if (result) {
        setData((prevData) => {
          return prevData.filter((item) => item.id != id);
        });
      }
      changeLoadingText("");
    });
  }

  function changeChecked() {
    changeLoadingText("資料更新中");
    DB.updateData(id, !checked).then((result) => {
      if (result) {
        setData((prevData) => {
          const newData = [...prevData];
          newData.find((item) => item.id === id).checked = !checked;
          return newData;
        });
      }
      changeLoadingText("");
    });
  }

  return (
    <div className={itemClass}>
      <div className="item__checkbox">
        <input
          type="checkbox"
          defaultChecked={checked}
          onClick={changeChecked}
        ></input>
      </div>
      <p className="item__item">{note}</p>
      <p className="item__datetime">
        {date} {time}
      </p>
      <div className="item__btn-delete">
        <img src={deleteIcon} onClick={deleteItem} />
      </div>
    </div>
  );
};

export default Item;
