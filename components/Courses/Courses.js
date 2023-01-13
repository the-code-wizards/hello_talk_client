import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import SingleCard from './SingleCard';

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://hello-talk-webserver.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    console.log(courses)

    return (
        <div className='md:max-w-[1240px] mx-auto py-20'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
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