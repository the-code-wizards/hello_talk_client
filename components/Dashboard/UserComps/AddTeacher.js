import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import AddTeacherCard from './AddTeacherCard';

const AddTeacher = () => {
  const currentDate = new Date();

  const {
    data: appliedData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appliedData'],
    queryFn: async () => {
      const res = await fetch(`https://hello-talk-webserver.vercel.app/appliedtechlist`);
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [blogStatus, setBlogStatus] = useState('');
  const onAddTeacher = async (data) => {
    const { _id, name, qualification, image, details } = data;

    const teacherDetail = {
      _id,
      name,
      qualification,
      details,
      date: currentDate,
      image,
    };
    fetch('https://hello-talk-webserver.vercel.app/addteacher', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // authorization: `bearer ${localStorage.getItem("s-token")}`,
      body: JSON.stringify(teacherDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Teacher Added');
      });
  };

  return (
    <div className=" pt-[4.5rem] w-full  ">
      <div className="">
        <div className="card-body">
          <h2 className="card-title text-[#1d4d87]">Add Teacher</h2>

          {appliedData.length > 0 ? (
            <div className=" p-4 shadow-xl mt-3 items-end rounded-xl border-2 border-[#1d4d87]">
              {appliedData.map((applied) => (
                <AddTeacherCard
                  key={applied._id}
                  applied={applied}
                  refetch={refetch()}
                ></AddTeacherCard>
              ))}
            </div>
          ) : (
            <div className=" p-4 shadow-xl mt-3 items-end rounded-xl border-2 border-[#1d4d87]">
              <h3 className="font-featherBold capitalize text-xl text-center text-[#1d4d87]">
                No Application for this role of teacher
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
