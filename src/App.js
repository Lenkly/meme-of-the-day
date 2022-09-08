import React, { useState, useEffect } from "react";
import "./App.css";
import { getRandomColor } from "./lib/randomColor";

function App() {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setRandomColor(getRandomColor);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: `${randomColor}` }}>
      <header className="App-header">
        <h1>Meme of the Day</h1>
      </header>
    </div>
  );
}

export default App;
