import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }); // will run every time the component renders, adding dependecy array [] makes it do only once, passing variables makes it run when variable changes

  useEffect(() => {
    document.title = "Joshua"; // to update content outside React DOM
    setTimeout(() => {
      console.log("TimeOut here"); // useEffect also works with timeouts
    }, 3000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <DogPics />
    </div>
  );
}

export default App;
