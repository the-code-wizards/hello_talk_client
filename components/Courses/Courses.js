import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import SingleCard from './SingleCard';
import { BsArrowBarLeft, IconName } from "react-icons/bs";


const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://hello-talk-webserver.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    console.log(courses)

    return (
        <div className='md:max-w-[1240px] mx-auto py-12'>
            <Head>
                <title>Courses - HELLO-TALK</title>
            </Head>
            <div className='flex justify-end pb-2'>
                <Link href='/'><button className='btn btn-ghost gap-x-2'><BsArrowBarLeft></BsArrowBarLeft>Back to home</button></Link>
              </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
            {
                courses?.map(course => <SingleCard
                    key={course._id}
                    course={course}
                ></SingleCard>
            )}
        </div>
        </div>
    );
};

export default Courses;