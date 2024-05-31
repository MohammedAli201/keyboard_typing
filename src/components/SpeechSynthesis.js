import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const SpeechSynthesis = ({ text }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(true);

  const speakText = () => {
    if (isSpeaking && currentWord) {
      const utterance = new SpeechSynthesisUtterance(currentWord);
      speechSynthesis.speak(utterance);
    }
  };

  const readRedWord = () => {
    for (let i = 0; i < text.length; i++) {
      if (text[i].props.style['color'] === 'red') {
        const redWord = text[i].props.children[0];
        setCurrentWord(redWord);
        return redWord;
      }
    }
    return "";
  };

  useEffect(() => {
    readRedWord();
  }, [text]);

  useEffect(() => {
    if (isSpeaking) {
      speakText();
    } else {
      speechSynthesis.cancel(); // Stop any ongoing speech synthesis
    }
  }, [currentWord, isSpeaking]);

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <div>
      <FontAwesomeIcon 
        icon={isSpeaking ? faVolumeHigh : faVolumeMute} 
        onClick={toggleSpeaking} 
        style={{ cursor: 'pointer', fontSize: '40px', color: isSpeaking ? 'black' : 'gray' }} 
      />
    </div>
  );
};

export default SpeechSynthesis;
