import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Cell from "./Cell";
const SCORE_KEY = "_score";
const PLAYER_KEY = "_player";
const Game = props => {
  const defaultValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const initState = +localStorage.getItem(PLAYER_KEY) || -1;
  const initScore = JSON.parse(localStorage.getItem(SCORE_KEY)) || {
    x: 0,
    o: 0,
    tie: 0
  };
  const [score, setScore] = useState(initScore);
  const [nextState, setNextState] = useState(initState);
  const [values, setValues] = useState([...defaultValues]);

  useEffect(() => {
    localStorage.setItem(SCORE_KEY, JSON.stringify(score));
    localStorage.setItem(PLAYER_KEY, nextState);
  });

  const getWinner = () => {
    var diagonalSum = 0;
    var revDiagonalSum = 0;
    for (let i = 0; i < 3; i++) {
      var rowSum = 0;
      var colSum = 0;

      for (var j = 0; j < 3; j++) {
        rowSum += values[i][j];
        colSum += values[j][i];
        if (i === j) {
          diagonalSum += values[i][j];
          revDiagonalSum += values[i][2 - j];
        }
      }
      if (rowSum === 3 || colSum === 3) return 1;
      if (rowSum === -3 || colSum === -3) return -1;
    }

    if (diagonalSum === 3 || revDiagonalSum === 3) return 1;
    if (diagonalSum === -3 || revDiagonalSum === -3) return -1;

    return 0;
  };

  const isGameEnd = () => {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) if (values[i][j] === 0) return false;
    return true;
  };

  const handleCellClick = ({ row, column }) => {
    if (values[row][column] !== 0) return;
    values[row][column] = nextState;
    setValues([...values]);
    setNextState(-1 * nextState);
    const winner = getWinner();
    if (winner !== 0 || isGameEnd()) {
      const { x, o, tie } = score;
      let message = "";
      if (winner === 1) {
        setScore({ x: x + 1, o, tie });
        message = "X won";
      } else if (winner === -1) {
        setScore({ x, o: o + 1, tie });
        message = "O won";
      } else {
        setScore({ x, o, tie: tie + 1 });
        message = "Tie";
      }
      //setTimeout(() => {
      Swal.fire({
        title: message,
        text: winner !== 0 ? "Wonderful" : "Try again!!!",
        icon: winner !== 0 ? "success" : "warning",
        timer: 3000,
        timerProgressBar: true,
        allowOutsideClick: false
      }).then(() => setValues([...defaultValues]));
      //}, 200);
    }
  };

  return (
    <div className="game">
      <div>
        <span>Current player:</span>
        <span className="ms-1 py-1 px-2 text-light bg-dark rounded">
          {nextState === 1 ? "X" : "O"}
        </span>
      </div>
      <div className="mt-5">
        {values.map((row, rowIndex) => (
          <div key={rowIndex} className="g-row">
            {row.map((value, coulmnIndex) => (
              <Cell
                key={rowIndex * row.length + coulmnIndex}
                value={value}
                row={rowIndex}
                column={coulmnIndex}
                onClick={handleCellClick}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h3>Score:</h3>
        <div className="d-flex justify-content-between bg-light rounded p-3">
          <div>
            <span>Player X: </span>
            <span className="text-primary">{score.x}</span>
          </div>
          <div>
            <span>Player O: </span>
            <span className="text-success">{score.o}</span>
          </div>
          <div>
            <span>Tie: </span>
            <span className="text-danger">{score.tie}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
