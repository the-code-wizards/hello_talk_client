import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckOut from '../../components/Payment/CheckOut';
import { useForm } from "react-hook-form";
import Navbar from '../../components/Shared/Navbar/Navbar';
import { useRouter } from 'next/router';
import Head from 'next/head';


const Payment = () => {
    const [courseDetails, setCourseDetails] = useState({});
    const { title, picture, details, offer_price, price, date, _id } = courseDetails;
    const [loading, setLoading] = useState(true)

    const router = useRouter();
    const id = router.query.payment;
    console.log(id)
    const ammount = parseFloat(offer_price) + parseFloat(offer_price * 0.15)


    useEffect(() => {
        if (id) {
            fetch(`https://hello-talk-webserver.vercel.app/course/${id}`)
                .then(res => res.json())
                .then(data => {
                    setCourseDetails(data)
                    console.log(data);
                    setLoading(false);
                })
                .catch((e) => console.log(e))
        }
    }, [id])
    const stripePromise = loadStripe('pk_test_51M7c2bCrl3dQ57EJh6p0K0ILccXLLoZic6xAgaQnZ7ZrsQKLI2WbssYPxb0rR44ixMD9YIfKS224Axx1rhaR51Ug00qVpJJN6x');

    if (loading) {
        return <progress className='progress w-full '></progress>
    }
    return (
        <>
            <Head>
                <title>HelloTalk - Checkout</title>
            </Head>
            <div >
                <Navbar></Navbar>
                <div className='grid grid-cols-12 pt-24'>
                    <div className='pl-10 pr-10 pb-20 pt-6 place-self-center col-span-5'>
                        <h1 className=' mb-8'>Pay for: {title}</h1>
                        <p className='text-4xl my-4'> <span className='text-xl'>Price: </span>৳ {offer_price}</p>
                        <img src={picture} className='w-56 h-56 object-cover rounded rounded-lg' alt="" />
                        <div className='grid grid-cols-10 mt-8'>
                            <h1 className='col-span-6  font-bold'>{title}</h1>
                            <div className='col-span-2'></div>
                            <h1 className='col-span-2'>৳ {offer_price}</h1>
                        </div>
                        <div className='grid grid-cols-10 mt-2'>
                            <h1 className='col-span-6'>Tax{" "}(15%)</h1>
                            <div className='col-span-2'></div>
                            <h1 className='col-span-2'>৳ {offer_price * 0.15}</h1>

                        </div>
                        <div className="divider"></div>
                        <div className='grid grid-cols-10 mt-2'>
                            <h1 className='col-span-6'>Total</h1>
                            <div className='col-span-2'></div>
                            <h1 className='col-span-2'>৳ {ammount}</h1>
                        </div>
                        <p className='text-sm mt-20'>Powered By HelloTalk</p>
                        <div className="divider divider-horizontal"></div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className='max-w-[600px] place-self-center col-span-5 '>
                        <Elements stripe={stripePromise}>
                            <CheckOut
                                ammount={ammount}
                                id={_id}
                                courseDetails={courseDetails}
                            ></CheckOut>
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;