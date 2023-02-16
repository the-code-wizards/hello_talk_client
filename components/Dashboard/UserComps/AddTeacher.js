import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import AddTeacherCard from './AddTeacherCard';

const AddTeacher = () => {
  const [teacherEmail, setTeacherEmail] = useState(null)
  console.log(teacherEmail)

  const {data: appliedData = [], refetch, isLoading } = useQuery({
    queryKey: "appliedData",
    queryFn: async () => {
        const res = await fetch(`https://hello-talk-webserver.vercel.app/appliedtechlist`)
        const data = await res.json()
        return data
    }
  })
  

  return (
    <div className=" pt-[4.5rem] w-full px-12">
      <Head>
        <title>Add teacher</title>
      </Head>
      <h2 className='capitalize text-xl font-featherBold mt-5 mb-3 text-[#1d4d87]'>All application for teacher</h2>

      
        {
        appliedData.length > 0 ?
        <div className=" p-4 shadow-xl mt-3 items-end rounded-xl border-2 border-[#1d4d87]">
      {
        appliedData.map(applied => <AddTeacherCard
          key={applied._id}
          applied={applied}
          refetch={refetch()}
        ></AddTeacherCard>)
      }
      </div>
      :
      <div className=" p-4 shadow-xl mt-3 items-end rounded-xl border-2 border-[#1d4d87]">
        <h3 className='font-featherBold capitalize text-xl text-center text-[#1d4d87]'>No Application for this role of teacher</h3>
      </div>
      }
        
    </div>
  );
};

export default AddTeacher;
