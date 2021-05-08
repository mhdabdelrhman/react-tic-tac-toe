import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const Game = props => {
  const defaultValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const initCellState = 1;
  const initScore = { x: 0, o: 0, tie: 0 };
  const [score, setScore] = useState(initScore);
  const [nextState, setNextState] = useState(initCellState);
  const [values, setValues] = useState([...defaultValues]);

  useEffect(() => {
    document.title = `Next clicke is ${nextState === 1 ? "X" : "O"}`;
  });

  let handleCellClick = ({ row, column }) => {
    if (values[row][column] > 0) return;
    values[row][column] = nextState;
    setValues([...values]);
    setNextState(nextState === 1 ? 2 : 1);
  };

  return (
    <div className="game">
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
  );
};

export default Game;
