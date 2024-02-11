/* eslint-disable react/prop-types */
import { useState } from "react";
// css
import "./tictactoe.css";

const Sqaure = ({
  index,
  count,
  setCount,
  sqaures,
  setSquares,
  isOver,
  setIsOver,
  setStatus,
}) => {
  function handleClick() {
    const copySquares = [...sqaures];
    if (copySquares[index]) {
      return;
    } else {
      setCount((prev) => prev + 1);
      copySquares[index] = count % 2 === 0 ? "X" : "O";
      setSquares(copySquares);
      if (count >= 4 && findWinner(copySquares, count).over) {
        setIsOver(true);
        setCount(0);
        findWinner(copySquares, index)?.combo?.map((c) => {
          const winButton = document.querySelector(`[data-index='${c}']`);
          winButton.setAttribute("data-win", "true");
        });
        setStatus(findWinner(copySquares, index).message);
      }
    }
  }
  return (
    <button
      data-index={index}
      onClick={handleClick}
      disabled={isOver ? true : false}
      data-x={sqaures[index] === "X" ? "true" : "false"}
    >
      {sqaures[index]}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState([...Array(9).fill(null)]);
  const [count, setCount] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="tictactoe-container absolute-center">
        <h1 className="heading text-center pb-1">TicTacToe Game</h1>
        {squares && squares.length > 0 && (
          <div className="square-container">
            {squares.map((square, index) => (
              <Sqaure
                key={index}
                setCount={setCount}
                index={index}
                sqaures={squares}
                count={count}
                isOver={isOver}
                setIsOver={setIsOver}
                setSquares={setSquares}
                setStatus={setStatus}
              />
            ))}
          </div>
        )}
      </div>
      <div className={`game-popup ${isOver ? "active" : ""}`}>
        <p
          style={{ visibility: `${isOver ? "visible" : "hidden"}` }}
          className="text-center subheading tictactoe-status mb-1"
        >
          {status}
        </p>
        <button
          className="play-again-btn"
          style={{ visibility: `${isOver ? "visible" : "hidden"}` }}
          onClick={() => {
            setSquares([...Array(9).fill(null)]);
            setIsOver(false);
            setCount(0);
            const winButtons = document.querySelectorAll(`[data-win="true"]`);
            const xButtons = document.querySelectorAll(`[data-x="true"]`);
            xButtons.forEach((x) => x.removeAttribute("data-x"));
            winButtons.forEach((btn) => btn.removeAttribute("data-win"));
          }}
        >
          Play Again
        </button>
      </div>
      <div className={`overlay ${isOver ? "active" : ""}`}></div>
    </>
  );
};

export default TicTacToe;

function findWinner(sqaures, index) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      console.log(a, b, c);
      console.log(sqaures[a], sqaures[b], sqaures[c]);
      return {
        over: true,
        winner: sqaures[index],
        message: `Winner is ${sqaures[index]}`,
        combo,
      };
    }
  }

  if (sqaures.every((s) => s !== null)) {
    console.log("first");
    return {
      over: true,
      winner: null,
      message: `Match is draw`,
    };
  }

  return {
    over: false,
    winner: null,
    message: `Winner is yet to declare`,
  };
}
