import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { LoadingUpdate } from "../index.js";
import DB from "./DB.js";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const changeLoadingText = useContext(LoadingUpdate);

  function checkData() {
    if (note == "") {
      return false;
    }
    return true;
  }

  function addItem() {
    if (checkData()) {
      changeLoadingText("新增資料中");
      const data = {
        id: uuidv4(),
        note: note,
        date: date,
        time: time,
        createTime: Date.now(),
        checked: false,
      };
      DB.addData(data).then((result) => {
        if (result) {
          add((preData) => [data, ...preData]);
          setNote("");
          setDate("");
          setTime("");
        }
        changeLoadingText("");
      });
    }
  }

  function changeNote(e) {
    setNote(() => e.target.value);
  }
  function changeDate(e) {
    setDate(() => e.target.value);
  }
  function changeTime(e) {
    setTime(() => e.target.value);
  }

  return (
    <div className="edit-wrap">
      <div className="edit-container">
        <div className="edit__column">
          <label htmlFor="edit-note">Todo:</label>
          <input
            type="text"
            id="edit-note"
            value={note}
            onChange={changeNote}
          />
        </div>
        <div className="edit__column">
          <label htmlFor="edit-date">Date:</label>
          <input
            type="date"
            id="edit-date"
            value={date}
            onChange={changeDate}
          />
        </div>
        <div className="edit__column">
          <label htmlFor="edit-time">Time:</label>
          <input
            type="time"
            id="edit-time"
            value={time}
            onChange={changeTime}
          />
        </div>
        <div className="edit__column">
          <input type="button" value="Add" onClick={addItem} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
