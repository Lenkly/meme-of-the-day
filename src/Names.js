import React, { useEffect, useState } from "react";

const Names = ({ buttonColor }) => {
  const [showEditor, setShowEditor] = useState(true);
  const [team, setTeam] = useState("");
  const getLocalStorage = window.localStorage.getItem("team");

  useEffect(() => {
    if (getLocalStorage && getLocalStorage !== "") {
      setTeam(JSON.parse(getLocalStorage));
      setShowEditor(false);
    } else {
      setShowEditor(true);
    }
  }, [getLocalStorage]);

  function randomize(array) {
    const newTeam = [...array];
    return newTeam.sort(() => Math.random() - 0.5);
  }

  function setList(e) {
    e.preventDefault();

    const stringifiedTeam = team.replace(/,/g, "").split(" ");
    setTeam(stringifiedTeam);
    setShowEditor(false);
    window.localStorage.setItem("team", JSON.stringify(stringifiedTeam));
    randomize(stringifiedTeam);
  }

  function resetList() {
    window.localStorage.removeItem("team");
    setTeam("");
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
              value={team}
              onChange={(e) => setTeam(e.target.value)}
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
