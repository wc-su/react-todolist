import React from "react";

import Item from "./Item.js";

const List = ({ data, deleteData }) => {
  return (
    <div className="list-container">
      {data.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
