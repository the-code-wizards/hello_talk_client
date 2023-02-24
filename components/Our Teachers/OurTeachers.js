import Head from "next/head";
import React, { useEffect, useState } from "react";
import OurTeacher from "./OurTeacher";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Loader from "../Shared/Loader";

const OurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://hello-talk-webserver.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data)
        setLoading(false)
      });
  }, []);
  return (
    <>
      <Navbar />
      <Head>
        <title>HelloTalk - Our Teachers</title>
      </Head>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2  text-[#4b4b4b] font-semibold mt-5 text-sm  tracking-wider text-center uppercase font-featherbold">
          HelloTalk Teachers
        </p>
        <h1 className="mb-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
          Meet Our Teachers
        </h1>
       
        {loading ? <Loader /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
          {teachers.map((teacher) => (
            <OurTeacher key={teacher.id} teacher={teacher}></OurTeacher>
          ))}
        </div>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurTeachers;
