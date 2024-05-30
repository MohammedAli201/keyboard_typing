// src/SpeechSynthesis.js
import React,{useState,useEffect} from 'react';

const  SpeechSynthesis = ({ text }) => {
  
  const speakText = () =>{
 
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

// without button, read loud when the page is loaded
    useEffect(() => {
        speakText();
        }, [text]);


    return (
      <div>

        
       
      </div>
    );
  
}

export default SpeechSynthesis;


