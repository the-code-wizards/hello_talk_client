import React from "react";
import { SiGooglemeet } from "react-icons/si";

const HelpSupport = () => {
  // <a href="https://meet.google.com/xsr-exra-rxj?pli=1 mt-5" target='_blank' rel="noopener noreferrer"> <button className='btn border-0 bg-green-400'>Join Meet</button> </a>
  // bg-gradient-to-r from-[#9dffc1] to-[#9ac8ff]
  //color: red
  return (
    <div className="mt-10">
      <div className="min-h-[300px] lg:md:w-[80%] mx-auto font-featherBold rounded-xl bg-[#d7e9ff] p-3 md:p-10 border-4 border-[#2D609F] shadow-xl">
        <div className="">
          <div className="">
            <h2 className="text-2xl text-[#408be7] font-semibold gap-3 flex items-center">
            Do you need any help and support? <img style={{width: "30px"}} src="https://i.ibb.co/ZMpvpK1/Logo-removebg-preview.png" alt="logo" />
            </h2>
            <p>All teachers are here for your help.</p>
            <p className="mt-3 text-sm text-base-content text-justify">
              Online classes and meetings are digital alternatives to
              traditional in-person learning and meetings. They use video
              conferencing platforms such as Zoom, Google Meet, and Microsoft
              Teams to facilitate remote learning and collaboration. Online
              classes and meetings allow individuals to participate from
              anywhere with an internet connection, making it easier for people
              to balance work and education.
            </p>
          </div>

        </div>
          <div className="flex justify-end mt-3">
            <a href="https://meet.google.com/xsr-exra-rxj?pli=1 mt-5" target='_blank' rel="noopener noreferrer">
                <button className="font-featherBold px-5 py-3 rounded-lg text-lg items-center text-white bg-[#2D609F] hover:bg-white hover:text-[#2D609F] flex gap-3 uppercase duration-200 hover:shadow-lg"><SiGooglemeet></SiGooglemeet>Join meet</button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default HelpSupport;
