import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  // console.log(text);
  const removeItem = (i) => {
    // items.splice(i, 1);
    // console.log(items, i);
    // setItems([...items]);

    const copy = [...items];
    copy.splice(i, 1);
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
          setItems([...items, text]);
          setText("");
        }}
      >
        add
      </button>

      {items.map((item, i) => {
        return (
          <ul>
            <li key={i}>
              {item}
              <button onClick={() => removeItem(i)}>remove</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
