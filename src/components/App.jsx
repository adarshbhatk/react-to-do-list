import React, { useState } from "react";

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

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
