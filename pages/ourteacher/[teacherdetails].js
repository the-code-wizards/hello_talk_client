import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const Teacherdetails = () => {
  const [teacherDetails, setTeacherDetails] = useState({});
  const [text, setText] = useState(
    "Hello! Welcome to my profile. My name is Scott Mendoza and I was born and raised in the United States. I am an experienced university professor and have taught thousands of students all over the world for over 10 years. I teach English for academic purposes, ESL, and academic writing. I have been teaching on Udemy for many years and my courses are some of the highest-ranked and most popular. I do my best to create online English courses that can truly help my students. I provide the best resources and I am always available by message. Please take a look at my courses and let me help you become fluent in English."
  );
  const { speak, stop } = useSpeechSynthesis();

  const router = useRouter();
  const teacherid = router.query.teacherdetails;
  const { _id, details, name, image } = teacherDetails;
  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/teacher/${teacherid}`)
      .then((res) => res.json())
      .then((data) => {
        setTeacherDetails(data);
        console.log(data);
      });
  }, [teacherid]);
  return (
    <div className="card hero pt-[4rem]">
      <div className="card bg-base-100 shadow-xl m-10">
        <div className="avatar justify-center mt-10">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
        </div>
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
      </div>
    </div>
  );
};

export default Teacherdetails;
