import React, { useEffect, useState } from "react";

const Memes = () => {
  const [memes, setMemes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualMeme = await response.json();
        setMemes(actualMeme);
        setError(null);
      } catch (err) {
        setError(err.message);
        setMemes(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function getRandomMeme(list) {
    if (list && !loading) {
      return list[Math.floor(Math.random() * list.length)];
    }
  }
  const randomMeme = getRandomMeme(memes?.data?.memes);
  return (
    <>
      <h1>MEME OF THE DAY</h1>
      {loading && <p>Have an nice day!</p>}
      {error && <p>Yikes, this shit isn't working.</p>}
      {memes && (
        <div key={randomMeme.id}>
          <img
            src={randomMeme.url}
            alt={randomMeme.name}
            style={{ maxHeight: "500px" }}
          />
        </div>
      )}
    </>
  );
};

export default Memes;
