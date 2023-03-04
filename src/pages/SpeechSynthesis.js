import React, { useEffect, useRef, useState } from "react";


const SpeechSynthesis = () => {
  const synth = window.speechSynthesis;

  const [test, setTest]= useState(0)
  setTimeout(() => {
   setTest(test+1)
  }, 4000000);
  useEffect(() => {
    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance("The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. ");
      synth.speak(utterance);
    };

    speak();
  }, [test]);

  return <div>Text-to-speech will play automatically</div>;
};

export default SpeechSynthesis;