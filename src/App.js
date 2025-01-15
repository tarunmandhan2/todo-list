import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  // console.log(text);
  const removeItem = (i) => {
    const copy = [...items];
    copy.splice(i, 1);
    setItems(copy);
  };

  const toggleItem = (i) => {
    const copy = [...items];
    copy[i].isComplete = !copy[i].isComplete;
    setItems(copy);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        name=""
        id="input1"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text) {
            setItems([...items, { text, isComplete: false }]);
            setText("");
          }
        }}
      >
        add
      </button>

      {items.map((item, i) => {
        return (
          <ul>
            <li
              key={i}
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}
            >
              {item.text}
              <button onClick={() => toggleItem(i)}>
                {item.isComplete ? "completed" : "mark"}
              </button>
              <button onClick={() => removeItem(i)}>remove</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
