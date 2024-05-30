import React, { useState, useEffect } from "react";
import VisualKeyboard from "./components/VisualKeyboard";
import SpeechSynthesis from "./components/SpeechSynthesis";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [wordsToShow, setWordsToShow] = useState(10); // Initialize to show 10 words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeKeys, setActiveKeys] = useState([]);
  const [keyTimeouts, setKeyTimeouts] = useState({});

  const inputHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const inputWords = newValue.trim().toLowerCase().split(" ");
    const displayedWords = generatedText.split(" ")
      .slice(currentWordIndex, currentWordIndex + wordsToShow)
      .map((word) => word.trim().toLowerCase());

    // Check if the lengths match
    if (inputWords.length === displayedWords.length) {
      if (inputWords.every((word, index) => word === displayedWords[index])) {
        // Reset input and show next set of words
        setInputValue("");
        setCurrentWordIndex(currentWordIndex + wordsToShow);
      }
    }
  };

  const keyDownHandler = (event) => {
    const key = event.key.toLowerCase();
    setActiveKeys((prevKeys) => {
      if (!prevKeys.includes(key)) {
        return [...prevKeys, key];
      }
      return prevKeys;
    });

    // Clear existing timeout for this key if any
    if (keyTimeouts[key]) {
      clearTimeout(keyTimeouts[key]);
    }
  };

  const keyUpHandler = (event) => {
    const key = event.key.toLowerCase();
    const timeout = setTimeout(() => {
      setActiveKeys((prevKeys) => prevKeys.filter((k) => k !== key));
      setKeyTimeouts((prevTimeouts) => {
        const newTimeouts = { ...prevTimeouts };
        delete newTimeouts[key];
        return newTimeouts;
      });
    }, 800); // Adjust the delay time as needed (200ms in this case)

    setKeyTimeouts((prevTimeouts) => ({
      ...prevTimeouts,
      [key]: timeout,
    }));
  };

  useEffect(() => {
    fetch("/text.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => setGeneratedText(data))
      .catch((error) => console.error("Error fetching the text file:", error));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  const getColoredText = () => {
    const inputWords = inputValue.trim().toLowerCase().split(" ");
    const generatedWords = generatedText.split(" ").slice(currentWordIndex, currentWordIndex + wordsToShow);
  

    return generatedWords.map((word, index) => {
      let color = "black"; // default color for words not yet typed
      if (index < inputWords.length) {
        color = inputWords[index] === word.trim().toLowerCase() ? "blue" : "red";
        
      
      }
      return (
        <span key={index} style={{ color: color }}>
          {word}{" "}
        </span>
      );
    });
  };

  const findRedIndex = () => {
    console.log("Generatedcolor ", getColoredText());
    //const redIndex = getColoredText().findIndex((word) => word.props.style.color === "red");
    return 0 ;
  }
  console.log(findRedIndex());
  let redIndex = findRedIndex();
 


  return (
    <div className="container"   style={{ padding
      :"50px"}}>
      <h1 className="header">React Basics</h1>
      <p className="text" style={ {fontSize:"26px"}}>{getColoredText()}</p>
      <textarea
        value={inputValue}
        onChange={inputHandler}
        rows={8}
        cols={60}
        className="textarea"
        disabled={!generatedText} // Disable textarea until text file is loaded
        style={ {fontSize:"26px"
        }}
      />
      <VisualKeyboard activeKeys={activeKeys} />
      
      <SpeechSynthesis text="Hellp wprd" />
      <p className="text" style={ {fontSize:"26px"}}>{getColoredText()[currentWordIndex]}</p>
     
    </div>
  );
}

export default App;
