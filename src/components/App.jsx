import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Heading from "./Heading";
import InputArea from "./InputArea";

function App() {

  const [list, updateList] = useState([]);

  function addItem(listItem) {
    updateList((prevValue) => {
      return [...prevValue, listItem];
    });
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
      <InputArea 
      onAdd={addItem}
      />
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
