import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsArrowBarLeft, IconName } from "react-icons/bs";
import useSingleUser from '../../components/hooks/useSingleUser';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Coursedetails = () => {
  const [singleUser] = useSingleUser()
  const [courseDetails, setCourseDetails] = useState({});
  const { title, picture, details, offer_price, price, date } = courseDetails;
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState({})

  const router = useRouter();
  const id = router.query.coursedetails;
  console.log(id);

  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/course/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourseDetails(data)
        console.log(data);
        setLoading(false);
      })
  }, [id])

  if (loading) {
    return <progress className='progress w-full '></progress>
  }

  return (
    <>
      <Navbar></Navbar>
      <div>
        <Head><title>{title.slice(0, 15)}</title></Head>
        <div className='max-w-[1240px] mx-auto py-20'>
          <div className='flex justify-end py-2'>
            <Link href='/courses'><button className='btn btn-ghost gap-x-2'><BsArrowBarLeft></BsArrowBarLeft>Back</button></Link>
          </div>
          <div className="card lg:card-side">
            <img src={picture} alt={title} className='w-1/2' />
            <div className="card-body">
              <h2 className="card-title text-[#00CC17] text-2xl">{title}</h2>
              <p>{details}</p>
              <div>
                <p><span className='font-semibold'>Module:</span> 20</p>
                <p><span className='font-semibold'>Duration:</span> 5 hour</p>
              </div>
              <div>
                <p className='text-xl font-semibold text-gray-300'><del>৳{price}</del></p>
                <h3 className='text-2xl font-semibold '><span className='text-[#00CC17]'>Price: </span>৳{offer_price}</h3>
              </div>
              <div className="card-actions justify-end">

                <Link href={`/payments/${id}`}><button className="btn bg-[#00CC17] border-none px-12 text-[#fff]">Buy now</button></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Coursedetails;