import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
const Teacherdetails = () => {
  const [teacherDetails, setTeacherDetails] = useState({});
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
    <div>
      <Navbar></Navbar>
      <div className="card hero pt-[4rem]">
      <div className="card bg-base-100 shadow-xl my-10">
        <div className="avatar justify-center mt-10">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-justify">{details}</p>
        </div>
      </div>
    </div>
    {/* <Footer></Footer> */}
    </div>
  );
};

export default Teacherdetails;
