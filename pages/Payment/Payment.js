import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { useForm } from "react-hook-form";
import Navbar from '../../components/Shared/Navbar/Navbar';


const Payment = () => {



    const stripePromise = loadStripe('pk_test_51M7c2bCrl3dQ57EJh6p0K0ILccXLLoZic6xAgaQnZ7ZrsQKLI2WbssYPxb0rR44ixMD9YIfKS224Axx1rhaR51Ug00qVpJJN6x');

    return (
        <div >
            <Navbar></Navbar>
            <div className='grid grid-cols-2 pt-24'>
                <div className='pl-20 pr-20 pb-20 pt-6 place-self-center'>
                    <h1 className=' mb-8'>Pay for: ENGLISH LANGUAGE FOR HEALTHCARE</h1>
                    <p className='text-4xl my-4'> <span className='text-xl'>Price: </span>$350</p>
                    <img src="https://elearningindustry.com/wp-content/uploads/2020/12/how-to-improve-your-elearning-course-cover-design.png" className='w-56 h-56 object-cover rounded rounded-lg' alt="" />
                    <div className='flex justify-between mt-8 font-bold'>
                        <h1>ENGLISH LANGUAGE FOR HEALTHCARE</h1>
                        <h1>$ 200</h1>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <h1>Taxt(15%)</h1>
                        <h1>$ 20</h1>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between mt-2'>
                        <p>Total</p>
                        <p>$ 220</p>
                    </div>
                    <p className='text-sm mt-20'>Powered By HelloTalk</p>
                    <div className="divider divider-horizontal"></div>
                </div>
                <div className='max-w-[600px] place-self-center'>
                    <Elements stripe={stripePromise}>
                        <CheckOut></CheckOut>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;