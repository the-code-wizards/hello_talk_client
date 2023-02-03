import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddTeacher = () => {
  const currentDate = new Date();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [blogStatus, setBlogStatus] = useState('');
  console.log(blogStatus);
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
    fetch('http://localhost:5000/addteacher', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      // authorization: `bearer ${localStorage.getItem("s-token")}`,
      body: JSON.stringify(teacherDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Teacher Added');
        console.log(data);
      });
  };

  return (
    <div className=" pt-[4.5rem] w-full">
      <div className="">
        <div className="card-body">
          <h2 className="card-title text-[#1d4d87]">Add Teacher</h2>

          <div className="shadow-xl rounded py-4 px-[8px]">
            <form onSubmit={handleSubmit(onAddTeacher)}>
              <div className="w-full flex justify-between gap-x-[10px]">
                <div className="w-[100%]">
                  <input
                    type="text"
                    placeholder="Teacher's Name"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Teacher name is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Qualification"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('qualification', {
                      required: {
                        value: true,
                        message: 'Qualification is required',
                      },
                    })}
                  />
                  <input
                    type="url"
                    placeholder="Teacher's Image URL"
                    className="input w-full max-w-md style={{color: red}} bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('image', {
                      required: {
                        value: true,
                        message: 'Teacher Image URL is required',
                      },
                    })}
                  />
                </div>
                <div className="w-[100%]">
                  <textarea
                    className="textarea w-full h-40 max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                    placeholder="Teacher's Details"
                    {...register('details', {
                      required: {
                        value: true,
                        message: 'Teacher details is required',
                      },
                    })}
                  />
                </div>
              </div>
              <button
                className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                type="submit"
              >
                Add Teacher
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
