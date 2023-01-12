import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleCard from './SingleCard';


const Courses = () => {
    const AllPackage = [
        {
            id: 1,
            title:"html 1",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
        {
            id: 2,
            title:"html 2",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
        {
            id: 3,
            title:"html 3",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
    ]

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