import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import SingleCard from '../Courses/SingleCard';

const MyCourses = () => {
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://hello-talk-webserver.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <progress className='progress w-full '></progress>
    }
    return (
        <div className='md:max-w-[1240px] mx-auto py-28'>
            <Head>
                <title>Courses - HELLO-TALK</title>
            </Head>

            <div className='grid md:grid-rows-3 grid-rows-1 mx-auto gap-5'>
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

export default MyCourses;