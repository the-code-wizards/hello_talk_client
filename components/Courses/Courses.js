import React, { useState } from 'react';
import CourseCard from './CourseCard';

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://hello-talk-webserver.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            {
                courses.map(course => <CourseCard 
                    key={course._id}>
                    course={course}
                </CourseCard>)
            }
        </div>
    );
};

export default Courses;