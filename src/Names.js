import React, { useEffect, useState } from "react";

const Names = ({ buttonColor }) => {
  const [showEditor, setShowEditor] = useState(true);
  const [team, setTeam] = useState(["A", "B", "C", "D", "E", "F", "G"]);

  useEffect(() => {
    if (window.localStorage.getItem("team")) {
      setShowEditor(false);
    } else {
      setShowEditor(true);
    }
  }, []);

  function randomize(array) {
    const newTeam = [...array];
    return newTeam.sort(() => Math.random() - 0.5);
  }

  function setList() {
    setShowEditor(false);
    randomize(team);
    window.localStorage.setItem("team", team);
  }

  function resetList() {
    window.localStorage.removeItem("team");
    setShowEditor(true);
  }

  const randomizedTeam = randomize(team);
  const nameList = randomizedTeam.map((t, index) => {
    return <li key={index}>{t}</li>;
  });

  return (
    <>
      <h1>DAILY ORDER</h1>
      <div className="flex-row">
        {showEditor ? (
          <form onSubmit={(e) => setList(e)}>
            <textarea
              type="text"
              id="nameArea"
              placeholder="Namen durch Komma trennen, z. B.: Anton, Berta, Caesar"
            />
            <button
              type="submit"
              style={{ color: `${buttonColor}` }}
              onSubmit={(e) => setList(e)}
            >
              LOS GEHTS!
            </button>
          </form>
        ) : (
          <div className="flex-column">
            <ol>{nameList}</ol>
            <h3>Neue Liste?</h3>
            <div className="flex-row">
              <button
                style={{ color: `${buttonColor}` }}
                onClick={() => resetList()}
              >
                YES PLEASE!
              </button>
              <button
                style={{ color: `${buttonColor}` }}
                onClick={() => randomize(team)}
              >
                NEE, NOCHMAL!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Names;
