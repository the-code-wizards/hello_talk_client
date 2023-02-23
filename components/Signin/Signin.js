import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { HiArrowLeft } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import swal from 'sweetalert';

const Signin = () => {
    const router = useRouter()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,] = useSignInWithEmailAndPassword(auth);
    const token = user && user?.user?.accessToken;
    const [signInError, setSignInError] = useState();
    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

if(error){
    console.log(error)
}
console.log(user)
    if (token) {
        Cookies.set("loggedin", "true");
        window.location.href = '/';
    }
   
    const onSubmit = data => {
        localStorage.setItem('email', data.email)
        signInWithEmailAndPassword(data.email, data.password, data.age);
    };
    return (
        <>
            <Head>
                <title>HelloTalk - Sign In</title>
            </Head>
            <div className="min-h-screen" style={{ backgroundImage: `url("back.svg")` }}>
                <div className='flex justify-between items-center p-[30px]'>
                    <Link href="/"><HiArrowLeft className="text-2xl cursor-pointer" /></Link>
                    <Link href="/signup"><button type="button" className='bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-[18px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#ece7e7]'>
                        SIGN UP
                    </button></Link>
                </div>
                <div className=' my-auto pb-8'>
                    <div className="lg:md:px-[23%] px-[5%]">
                        <div className="border-[2px] rounded-xl w-full bg-[#fff]">
                            <h2 className='lg:md:text-2xl text-lg text-center lg:md:mt-4 mt-2 text-[#3C3C3C] font-featherBold'>Log in</h2>
                            <div className="mt-[50px] my-auto ">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                                    <input type="email"
                                        placeholder="Email"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            }
                                        })} />
                                    <input type="password"
                                        placeholder="Password"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            }
                                        })} />
                                        <p className="text-red-500 mt-2 text-[14px] text-center">{error ? error.message : ''}</p>

                                    <button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[40%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px]" type="submit">LOG IN</button>
                                    {/* <div className="text-center font-bold text-lg my-[20px]">OR</div> */}
                                </form>

                                <div className="flex justify-center gap-x-[5px]">
                                </div>
                                <div className="mt-4 text-center pb-4">
                                    <Link href="/terms" className="cursor-pointer lg:md:font-bold text-center ml-3 text-medium text-[15px]">Terms and condition</Link>
                                    <Link href="/privacy" className="cursor-pointer lg:md:font-bold text-center ml-3 text-medium text-[15px]">Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;