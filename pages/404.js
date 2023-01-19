import React from 'react';
import Lottie from "lottie-react";
import errorpage from '../resources/lottieJson/errorpage.json'
import CustomButton from '../components/CustomDesign/CustomButton/CustomButton';
import Link from 'next/link';


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                        <Lottie animationData={errorpage} loop={true}></Lottie>
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn t find this page.</p>
                    <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Back to homepage</a> */}
                    <Link href='/'> <CustomButton>Back to HomePage</CustomButton></Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;