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
import { useRouter } from 'next/router'
// import {  useNavigate,useLocation } from 'react-router-dom';

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

    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);    
    const [token] = useToken(user || gUser);
    //  let navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    // let signInError;

    //     useEffect( () => {
    //     if (token) {
    //         navigate(from, { replace: true });      
    //     }
    // },[token, from, navigate])

    if (gLoading || loading) {
        return <h2>loading</h2>
    }

      if (error || gError) {
        signInError = <p className='text-red-500 font-bold'><small>{error?.message || gError?.message}</small></p>
    }

    if (token) {
        to('/')
    }

   
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
         <>
         <Head>
        <title>Hello Talk - Sign In</title>
      </Head>
        <div className='p-[30px] min-h-screen my-auto'>
            <div className='flex justify-between items-center'>
                <Link href="/"><HiArrowLeft className="text-2xl cursor-pointer" /></Link>              
                    <button type="button" onClick={() => router.push('/signup')} className='bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-[18px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#ece7e7]'>
                   SIGN UP
                </button>
            </div>
                <h2 className='lg:md:text-2xl text-lg text-center lg:md:mt-4 mt-10 text-[#3C3C3C] font-featherBold'>Log in</h2>
                <div className="mt-[25px] min-h-screen my-auto">                   
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <input type="email"
                        placeholder="Email"
                        className="input w-full max-w-sm bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })} />
                         <input type="password" 
                        placeholder="Password"
                        className="input w-full max-w-sm bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}/>

                        <button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px]" type="submit">LOG IN</button>                    
                      <div className="text-center font-bold text-lg my-[20px]">OR</div>
                </form>
              
                    <div className="flex justify-center gap-x-[5px]">
                        <button className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[15%] w-[50%] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#E5E5E5]" type="submit"><TfiFacebook className="text-blue-400 text-[25px] mr-[4px]" />Facebook</button>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] lg:md:w-[15%] w-[50%] hover:bg-[#E5E5E5]" type="submit"><AiOutlineGoogle className="text-red-400 text-[25px] mr-[4px]" />Google</button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link href="/terms" className="cursor-pointer font-bold text-center">Terms and condition</Link>
                        <Link href="/privacy" className="cursor-pointer font-bold text-center ml-3">Privacy policy</Link>
                    </div>
                </div>
                
        </div>
        </>
    );
};

export default Signin;