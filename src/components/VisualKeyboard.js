import React from "react";
import "../assets/styles/VisualKeyboard.css";

const VisualKeyboard = ({ activeKeys }) => {
  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    ["Shift", "Space", "Enter", "Backspace"]
  ];

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => (
            <div
              key={key}
              className={`keyboard-key ${activeKeys.includes(key.toLowerCase()) ? "active" : ""}`}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VisualKeyboard;
