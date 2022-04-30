import React, { useState } from "react";
import classNames from "classnames";

// import deleteIcon from '../images/trash.png';
import deleteIcon from "../images/delete.png";

const Item = ({ id, note, date, time, deleteData }) => {
  const [checked, setCheck] = useState(false);
  const itemClass = classNames("item-container", {
    checked: checked ? true : false,
  });

  function deleteItem() {
    deleteData((prevData) => {
      return prevData.filter((item) => item.id != id);
    });
  }

  function changeChecked() {
    setCheck(() => !checked);
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
