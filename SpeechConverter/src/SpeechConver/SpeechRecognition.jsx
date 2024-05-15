import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function SpeechToTextConverter() {
  const [convertedText, setConvertedText] = useState("");
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setConvertedText(transcript);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedText);
  };

  return (
    <div className="text-center">
      <h1>Speech to Text Converter</h1>
      <textarea
        value={convertedText}
        placeholder="Converted Text will appear here"
        readOnly
        rows={5}
        cols={50}
      />
      <div>
        {listening ? (
          <button onClick={stopListening}>Stop Listening</button>
        ) : (
          <button onClick={startListening}>Start Listening</button>
        )}
        <button onClick={copyToClipboard} disabled={!convertedText}>
          Copy to Clipboard
        </button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
}

export default SpeechToTextConverter;
