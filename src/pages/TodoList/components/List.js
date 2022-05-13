import React from "react";

import Item from "./Item.js";

const List = ({ data, setData }) => {
  return (
    <div className="list-container">
      {data.map((item) => {
        const { id, note, date, time, checked } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            checked={checked}
            setData={setData}
          />
        );
      })}
    </div>
  );
};

export default List;
