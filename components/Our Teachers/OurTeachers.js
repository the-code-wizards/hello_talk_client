import Head from "next/head";
import React, { useEffect, useState } from "react";
import OurTeacher from "./OurTeacher";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from '../Shared/Footer/Footer';

const OurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://hello-talk-webserver.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div className="">
      <Navbar />
      <Head>
        <title>HelloTalk - Our Teachers</title>
      </Head>
      <section className="h-screen relative mx-auto md:p-20 py-16">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-150"></div>
        <div className="absolute inset-0 mask-image-radial-gradient from-gray-900 to-transparent"></div> */}
        <div>
          <h1 className="my-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
            Our Teachers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3">
            {teachers.map((teacher) => (
              <OurTeacher key={teacher.id} teacher={teacher}></OurTeacher>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurTeachers;
