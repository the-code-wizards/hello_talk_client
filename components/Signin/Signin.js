import Link from 'next/link';
import React from 'react';
import Head from "next/head";
import { HiArrowLeft } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TfiFacebook } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router'
import Lottie from "lottie-react";
import signin from '../../resources/lottieJson/login.json'

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
    const [token] = useToken(user || gUser);
    let signInError;


    if (gLoading || loading) {
        return <progress className='progress w-full'></progress>
    }

    if (error || gError) {
        signInError = <p className='text-red-500 font-bold'><small>{error?.message || gError?.message}</small></p>
    }

    if (token) {
        window.location.href = "/";
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password, data.age);
    };
    return (
        <>
            <Head>
                <title>HelloTalk - Sign In</title>
            </Head>
            <div className="min-h-screen"  style={{ backgroundImage: `url("back.svg")` }}>
                <div className='flex justify-between items-center p-[30px]'>
                    <Link href="/"><HiArrowLeft className="text-2xl cursor-pointer" /></Link>
                    <button type="button" onClick={() => router.push('/signup')} className='bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-[18px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#ece7e7]'>
                        SIGN UP
                    </button>
                </div>
            <div className=' my-auto '>
                <div className="px-[23%] ">
                    {/* <div className="w-[100%] h-[150px]">
                        <Lottie animationData={signin} loop={true} />
                    </div> */}
                        <div className="border-[2px] rounded-xl w-full bg-[#fff]">
                        <h2 className='lg:md:text-2xl text-lg text-center lg:md:mt-4 mt-10 text-[#3C3C3C] font-featherBold'>Log in</h2>
                        <div className="mt-[50px] my-auto ">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                                <input type="email"
                                    placeholder="Email"
                                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        }
                                    })} />
                                <input type="password"
                                    placeholder="Password"
                                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        }
                                    })} />

                                <button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[40%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px]" type="submit">LOG IN</button>
                                {/* <div className="text-center font-bold text-lg my-[20px]">OR</div> */}
                            </form>

                            <div className="flex justify-center gap-x-[5px]">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] lg:md:w-[40%] w-[50%] hover:bg-[#E5E5E5]" type="submit"><AiOutlineGoogle className="text-red-400 text-[25px] mr-[4px]" />Google</button>
                            </div>
                            <div className="mt-4 text-center pb-4">
                                <Link href="/terms" className="cursor-pointer font-bold text-center">Terms and condition</Link>
                                <Link href="/privacy" className="cursor-pointer font-bold text-center ml-3">Privacy policy</Link>
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