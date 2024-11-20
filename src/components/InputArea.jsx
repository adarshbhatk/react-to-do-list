import React, {useState} from "react";

function InputArea(props) {

    const [listItem, updateListItem] = useState("");

    function handleChange(event) {
        updateListItem(event.target.value);
      }

    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={listItem} />
        <button onClick={() => {
            props.onAdd(listItem);
            updateListItem("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;