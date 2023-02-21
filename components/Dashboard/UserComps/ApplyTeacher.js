import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import useSingleUser from '../../hooks/useSingleUser';


const ApplyTeacher = () => {

    const [singleUser] = useSingleUser();
    const {name, email, photoURL} = singleUser;
    const currentDate = new Date();

//   check he or she already applied for a teacher or not
  const {data: appliedData = [], refetch, isLoading } = useQuery({
    queryKey: ['appliedData'],
    queryFn: async () => {
        const res = await fetch(`https://hello-talk-webserver.vercel.app/myapplied?email=${singleUser?.email}`);
        const data = await res.json();
        return data
    }
})

const {data: isTeacher = [] } = useQuery({
  queryKey: ['isTeacher'],
  queryFn: async () => {
      const res = await fetch(`https://hello-talk-webserver.vercel.app/teacher?email=${singleUser?.email}`)
      const data = await res.json()
      return data
  }
})


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onAddTeacher = async (data) => {
    const { _id, name, qualification, image, details } = data;

    const teacherDetail = {
      _id,
      name,
      email: singleUser.email,
      qualification,
      details,
      date: currentDate,
      image,
    };
    fetch('https://hello-talk-webserver.vercel.app/applyteacher', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(teacherDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Applied for teacher is successful');
        // console.log(data);
        refetch()
      });
  };




  refetch()

    return (
        <div className=" pt-[4.5rem] w-full">
          <div className='py-20 px-10'>
            {
              isTeacher.email ?
              <div className="alert bg-[#1d4d87] shadow-lg text-white">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span className='font-featherBold'>Dear {singleUser?.name}, you are selected for the teacher role.</span>
  </div>
</div>
:
<div>
  {
    appliedData.email ?
    <div className="alert bg-[#1d4d87] shadow-lg text-white">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span className='font-featherBold'>Dear {singleUser?.name}, you already applied for this role. Wait for the admin to select you.</span>
  </div>
</div>
:
<div className="card-body">
            <h2 className="card-title text-[#1d4d87] capitalize font-featherBold">Apply for a teacher</h2>
  
            <div className="shadow-xl rounded py-4 px-[8px]">
              <form onSubmit={handleSubmit(onAddTeacher)}>
                <div className="w-full flex justify-between gap-x-[10px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      defaultValue={name}
                      placeholder="Your Name"
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
                      placeholder="Your Image URL"
                      defaultValue={photoURL}
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
                      className="textarea w-full h-24  max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                      placeholder="Some thing about you"
                      {...register('details', {
                        required: {
                          value: true,
                          message: 'Teacher details is required',
                        },
                      })}
                    />

                    <input
                      type="email"
                      defaultValue={email}
                      placeholder="Your email"
                      readOnly
                      className="input w-full disabled max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                      {...register('email')}
                    />
                  </div>
                </div>
                <button
                  className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                  type="submit"
                >
                  Apply now
                </button>
              </form>
            </div>
          </div>
  }
</div>
            }
        </div>
      </div>
    );
};

export default ApplyTeacher;