import React, { useState, useEffect } from "react";
import Cell from "./Cell";
const SCORE_KEY = "_score";
const PLAYER_KEY = "_player";
const Game = props => {
  const defaultValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const initState = +localStorage.getItem(PLAYER_KEY) || 1;
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

  let handleCellClick = ({ row, column }) => {
    if (values[row][column] > 0) return;
    values[row][column] = nextState;
    setValues([...values]);
    setNextState(nextState === 1 ? 2 : 1);
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
