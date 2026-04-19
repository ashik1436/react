import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0
  });

  // 🔥 One function for all colors
  let updateMove = (color) => {
    setMoves(prev => ({
      ...prev,
      [color]: prev[color] + 1
    }));
  };

  return (
    <div>
      <p>Game begins:</p>

      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => updateMove("blue")}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => updateMove("yellow")}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => updateMove("green")}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => updateMove("red")}
        >
          +1
        </button>
      </div>
    </div>
  );
}