import Head from "next/head";
import React, { useEffect, useState } from "react";
import OurTeacher from "./OurTeacher";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from '../Shared/Footer/Footer';

const OurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <>
      <Navbar />
      <Head>
        <title>HelloTalk - Our Teachers</title>
      </Head>
      <section className="md:max-w-[1240px] mx-auto md:p-20 py-3">
        <h1 className="my-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
          Our Teachers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teachers.map((teacher) => (
            <OurTeacher key={teacher.id} teacher={teacher}></OurTeacher>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurTeachers;
