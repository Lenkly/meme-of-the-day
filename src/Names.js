import React, { useEffect, useState } from "react";

const Names = ({ buttonColor }) => {
  const [showEditor, setShowEditor] = useState(true);
  const [team, setTeam] = useState("");
  const getLocalStorage = window.localStorage.getItem("team");

  useEffect(() => {
    if (getLocalStorage && getLocalStorage !== "") {
      setTeam(getLocalStorage);
      setShowEditor(false);
    } else {
      setShowEditor(true);
    }
  }, [getLocalStorage]);

  function randomize(array) {
    const newTeam = [...array];
    return newTeam.sort(() => Math.random() - 0.5);
  }

  function handleText(e) {
    setTeam(e.target.value);
  }

  function setList(e) {
    e.preventDefault();
    setShowEditor(false);
    window.localStorage.setItem("team", team);
    randomize(team);
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
          <form onSubmit={setList}>
            <textarea
              type="text"
              id="nameArea"
              placeholder="Namen durch Komma trennen, z. B.: Anton, Berta, Caesar"
              onChange={handleText}
            />
            <button
              type="submit"
              style={{ color: `${buttonColor}` }}
              onSubmit={setList}
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
