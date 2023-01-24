import React, { useEffect, useState } from "react";
import OurTeacher from "./OurTeacher";

const OurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://hello-talk-webserver.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <section className="md:max-w-[1240px] mx-auto md:p-20 py-3">
      <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl py-5">
        Our Teachers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {teachers.map((teacher) => (
          <OurTeacher key={teacher.id} teacher={teacher}></OurTeacher>
        ))}
      </div>
    </section>
  );
};

export default OurTeachers;
