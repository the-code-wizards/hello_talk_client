import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleCard from './SingleCard';


const Courses = () => {
    // const {data: courses = []} = useQuery({
    //     queryKey: ["courses"],
    //     queryFn: async()=>{
    //         const res = await fetch('https://hello-talk-server.vercel.app/courses') 
    //         const data = await res.json()
    //         return data;
    //     }
    // })
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://hello-talk-webserver.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
   
          <div className='max-w-[1240px] mx-auto p-20'>
  
           <div className='grid grid-cols-3 gap-10'>
           {
                courses.map(packages => <SingleCard
                key={packages._id}
                packages={packages}
                ></SingleCard> )
            }
           </div>

        </div>
     
    );
};

export default Courses;