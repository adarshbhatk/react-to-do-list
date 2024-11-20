import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Heading from "./Heading";

function App() {
  const [listItem, updateListItem] = useState("");

  const [list, updateList] = useState([]);

  function handleChange(event) {
    updateListItem(event.target.value);
  }

  function handleClick() {
    updateList((prevValue) => {
      return [...prevValue, listItem];
    });
    updateListItem("");
  }

  function deleteItem(id) {
    updateList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <ToDoItem
            text={item}
            onChecked={deleteItem}
            key={index}
            id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
