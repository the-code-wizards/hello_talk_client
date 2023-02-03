import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Teacherdetails = () => {
  const [teacherDetails, setTeacherDetails] = useState({});
  const router = useRouter();
  const teacherid = router.query.teacherdetails;

  const { _id, details, name, image } = teacherDetails;
  useEffect(() => {
    fetch(`http://localhost:5000/teacher/${teacherid}`)
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
      </div>
    </div>
  );
};

export default Teacherdetails;
