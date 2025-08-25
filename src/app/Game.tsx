"use client";

import React, { useCallback, useState } from "react";
import { WORDS } from "./words";
import { randomRange } from "./randomRange";

function Game() {
  const [playersCount, setPlayersCount] = useState(3);
  const [gameWords, setGameWords] = useState<(string | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const increment = () => {
    setPlayersCount((v) => v + 1);
  };

  const decrement = () => {
    if (playersCount <= 1) return;

    setPlayersCount((v) => v - 1);
  };

  const handleNextPlayerClick = () => {
    if (currentIndex === playersCount - 1) {
      setCurrentIndex(0);
      setGameWords([]);
      setIsVisible(false);
      return;
    }
    setIsVisible(false);
    setCurrentIndex((v) => v + 1);
  };

  const initGame = () => {
    const word = WORDS[randomRange(0, WORDS.length - 1)];

    const temp = new Array(playersCount).fill(word);

    const traitorIndex = randomRange(0, playersCount - 1);

    temp[traitorIndex] = null;
    setGameWords(temp);
  };

  return (
    <div className="p-4">
      {gameWords.length === 0 ? (
        <>
          <h2 className="text-2xl mb-4">Ilośc graczy: {playersCount}</h2>
          <div className="flex rounded-3xl overflow-hidden w-min mb-4">
            <button
              className="bg-green-400 size-20 text-white aspect-square grid place-items-center text-2xl cursor-pointer"
              onClick={increment}
            >
              +
            </button>
            <button
              className="bg-red-400 size-20 text-black aspect-square grid place-items-center text-2xl  cursor-pointer"
              onClick={decrement}
            >
              -
            </button>
          </div>
          <button
            onClick={initGame}
            className="bg-sky-400 rounded-md px-8 py-4 text-white grid place-items-center text-3xl  cursor-pointer"
          >
            Zagraj!
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl mb-4">Gracz {currentIndex + 1}</h2>
          {isVisible ? (
            <>
              <p className="text-xl mb-2">
                {gameWords[currentIndex] ?? "Oszust!"}
              </p>
              <button
                onClick={handleNextPlayerClick}
                className="bg-sky-400 rounded-md px-8 py-4 text-white grid place-items-center text-3xl  cursor-pointer"
              >
                {currentIndex === playersCount - 1 ? "Reset" : "Następny gracz"}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsVisible(true)}
              className="bg-sky-400 rounded-md px-8 py-4 text-white grid place-items-center text-3xl  cursor-pointer"
            >
              Pokaż
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Game;
