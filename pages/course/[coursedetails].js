import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Coursedetails = () => {
    const [courseDetails, setCourseDetails] = useState({});
    const { title, picture , details, offer_price, price} = courseDetails;
    
    const router = useRouter();
    const id  = router.query.coursedetails;
    console.log(id);

    // const courseid = id.split('-')[1]

    useEffect(()=>{
        fetch(`https://hello-talk-webserver.vercel.app/course/${id}`)
        .then(res => res.json())
        .then(data => {
            setCourseDetails(data)
            console.log(id);
        })
    },[id])

    return (
            <div className='max-w-[1240px] mx-auto my-16'>
         <div className="card lg:card-side">
        <img src={picture}alt="Album" className='md:w-1/2'/>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#00CC17] border-none px-12">Buy</button>
          </div>
        </div>
    
      </div>
       </div>
    );
};

export default Coursedetails;