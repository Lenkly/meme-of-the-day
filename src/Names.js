import React from "react";

const Names = ({ buttonColor }) => {
  const team = [
    "Andy",
    "Picke",
    "Flo",
    "Henning",
    "Jannik",
    "Lydi",
    "Marcel",
    "Niklas",
    "Paddel",
    "Yusuf",
  ];

  function randomize() {
    console.log("click");
  }

  function convertColor(hex, a) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }

  const nameList = team.map((t, index) => {
    return <li key={index}>{t}</li>;
  });

  return (
    <>
      <h1>DAILY ORDER</h1>
      <div className="flex">
        <textarea
          className="input"
          id="nameArea"
          style={{
            background: `linear-gradient(white, ${convertColor(
              buttonColor,
              0.5
            )})`,
            color: `${buttonColor}`,
          }}
        ></textarea>
        <ol>{nameList}</ol>
      </div>
      <button style={{ color: `${buttonColor}` }} onClick={() => randomize()}>
        NOCHMAL!
      </button>
    </>
  );
};

export default Names;
