import React from "react";

const Cell = ({ value, row, column, onClick }) => {  
  return (
    <div className="cell" onClick={() => onClick({ row, column })}>
      <span>
        {value && value > 0 ? (
          value === 1 ? (
            "X"
          ) : (
            "O"
          )
        ) : (
          <>&nbsp;</>
        )}
      </span>
    </div>
  );
};

export default Cell;
