import Link from 'next/link';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TfiFacebook } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {    
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, 
        handleSubmit, 
        watch,
        formState: { errors } } = useForm();
     const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);    
    const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    let signUpError;

    if (gLoading || loading || updating) {
        return <h2>loading</h2>
    }

    if (error || gError || updateError) {
        signUpError = <p className='text-red-500 font-bold'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (token) {
        to('/')
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    return (
        <div className='p-[30px]'>
            <div className='flex justify-between items-center'>
                <Link href="/"><HiArrowLeft className="text-2xl cursor-pointer" /></Link>
                <h2 className='text-2xl mt-6 text-[#3C3C3C] font-featherBold'>Create Your Profile</h2>
                <button className='bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[3px] border-l-[2px] border-r-[2px] py-[8px] px-[18px] rounded-xl text-[#1cb0f6] font-bold text-[14px]'>
                   LOGIN
                </button>
            </div>

            <div className="mt-[25px]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <input type="number"
                        placeholder="Age"
                        className="input w-full max-w-sm bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register("age", {
                            required: {
                                value: true,
                                message: 'Age is required'
                            }
                        })} />
                    <input type="text" 
                        placeholder="Name"
                        className="input w-full max-w-sm bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} />
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

                    <button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[30%] rounded-xl text-[#fff] font-bold text-[15px] focus:border-b-[2px]" type="submit">CREATE ACCOUNT</button>                    
                      <div className="divider">OR</div>
                </form>
              

                    <div className="flex justify-center gap-x-[5px]">
                        <button className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[15%] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#E5E5E5]" type="submit"><TfiFacebook className="text-blue-400 text-[25px] mr-[4px]"/>Facebook</button>
                        <button  
                         onClick={() => signInWithGoogle()}
                         className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] w-[15%] hover:bg-[#E5E5E5]" type="submit"><AiOutlineGoogle className="text-red-400 text-[25px] mr-[4px]"/>Google</button>
                    </div>
            </div>
        </div>
    );
};

export default Signup;