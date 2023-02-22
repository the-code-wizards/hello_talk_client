import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import Navbar from "../../components/Shared/Navbar/Navbar";
// import { useSpeechSynthesis } from "react-speech-kit";
const Teacherdetails = () => {
  const [teacherDetails, setTeacherDetails] = useState({});

  const router = useRouter();
  const teacherid = router.query.teacherdetails;
  const { _id, details, name, image, title, qualification, email } =
    teacherDetails;
  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/teacher/${teacherid}`)
      .then((res) => res.json())
      .then((data) => {
        setTeacherDetails(data);
        console.log(data);
      });
  }, [teacherid]);
  const text =
    "Hello! Welcome to my profile. My name is Scott Mendoza and I was born and raised in the United States. I am an experienced university professor and have taught thousands of students all over the world for over 10 years. I teach English for academic purposes, ESL, and academic writing. I have been teaching on Udemy for many years and my courses are some of the highest-ranked and most popular. I do my best to create online English courses that can truly help my students. I provide the best resources and I am always available by message. Please take a look at my courses and let me help you become fluent in English.";
  // const { speaking, speak, stop } = useSpeechSynthesis();
  return (
    <div>
      <Head>
        <title> {title} - HelloTalk</title>
      </Head>
      <Navbar></Navbar>
      <div className="pt-32">
        <div className="text-gray-800 md:max-w-[1240px] mx-auto shadow-md rounded-lg">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row p-5">
            <img
              src={image}
              alt=""
              className=" rounded-lg flex-shrink-0 h-[300px] w-[300px] border  md:justify-self-start bg-gray-500 border-gray-300"
            />
            <div className="flex flex-col">
              <h4 className="text-2xl  font-featherBold text-center md:text-left mb-2">
                {name}
              </h4>
              <h4 className="text-md font-featherBold text-center md:text-left mb-4">
                {qualification}
              </h4>
              <p className="text-gray-600">{details}</p>
              <p className="text-gray-600 font-semibold mt-2">
                Email: {email ? email : "no email found"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card hero pt-[4rem]">
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
        <div className="flex items-center py-2 mx-10 lg:md:text-[18px] text-[16px]">
          <Link href={`/ourteachers`}>
            <FaArrowLeft></FaArrowLeft>
          </Link>
          <h3 className="px-3">Go To Back</h3>
        </div>
        <div className="p-6">
         
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Teacherdetails;
