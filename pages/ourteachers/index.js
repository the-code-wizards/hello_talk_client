import React from "react";
import OurTeachers from "../../components/Our Teachers/OurTeachers";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

const index = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="max-w-[1240px] mx-auto">
        <OurTeachers></OurTeachers>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default index;
