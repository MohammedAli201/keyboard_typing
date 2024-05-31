import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLongArrowAltRight, faLevelDownAlt, faBackspace } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/VisualKeyboard.css";

const VisualKeyboard = ({ activeKeys }) => {
  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    ["Shift", "Space", "Enter", "Backspace"]
  ];

  const getKeyContent = (key) => {
    switch (key) {
      case "Shift":
        return <FontAwesomeIcon icon={faArrowUp} />;
      case "Space":
        return <FontAwesomeIcon icon={faLongArrowAltRight} />;
      case "Enter":
        return <FontAwesomeIcon icon={faLevelDownAlt} />;
      case "Backspace":
        return <FontAwesomeIcon icon={faBackspace} />;
      default:
        return key;
    }
  };

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => (
            <div
              key={key}
              className={`keyboard-key ${activeKeys.includes(key.toLowerCase()) ? "active" : ""}`}
            >
              {getKeyContent(key)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VisualKeyboard;
