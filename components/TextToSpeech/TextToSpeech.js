import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const TextToSpeech = () => {
  const [text, setText] = useState("Hello, World!");
  const { speak, stop } = useSpeechSynthesis();
  //   const handleOnClick = () => {
  //     speak({ text: text });
  //   };
  //   const [text, setText] = useState("");

  //   const handleListenClick = () => {
  //     setText(children);
  //   };
  return (
    <div className="p-6">
      {/* <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block w-full h-32 appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      /> */}
      {/* <div className="flex items-center mb-6"> */}
      <button
        onClick={() => speak({ text })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Speak
      </button>
      <button
        onClick={stop}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Stop
      </button>
    </div>
    // </div>
    // {/* // <div className="lg:md:px-0 px-6">
    //   <textarea */}
    //     className="textAreaStyle"
    //     onChange={(e) => {
    //       setText(e.target.value);
    //     }}
    //   ></textarea>
    //   <button
    //     className="buttonStyle"
    //     onClick={() => {
    //       handleOnClick();
    //     }}
    //   >
    //     Listen
    //   </button>
    // </div>
    // <div>
    //   <button onClick={handleListenClick}>Listen</button>
    //   <ReactSpeech text={text} />
    // </div>
  );
};

export default TextToSpeech;
