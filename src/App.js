import React, { useState, useEffect } from "react";
import Memes from "./Memes";
import Names from "./Names";
import "./App.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setRandomColor(getRandomColor);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: `${randomColor}` }}>
      <header className="App-header">
        {/* <Memes /> */}
        <Names buttonColor={randomColor} />
      </header>
    </div>
  );
}

export default App;
