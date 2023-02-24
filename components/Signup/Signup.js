import Link from 'next/link';
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { set, useForm } from "react-hook-form";
import auth from '../../firebase.init';
// import useToken from '../hooks/useToken';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useRouter } from 'next/router'
import swal from 'sweetalert';
import Cookies from 'js-cookie';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [age, setAge] = useState(null)
    const [finalage, setFinalage] = useState('young')

    if (age) {
        if (age < 18)
            setFinalage('young')
        else {
            setFinalage('adult')
        }
    }

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
    // const [token] = useToken(user || gUser)
    const token = user ? user?.user?.accessToken : gUser?.user?.accessToken;
    const [signUpError, setSignUpError] = useState();
    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    // if (gLoading || loading || updating) {
    //     return <progress className='progress w-full'></progress>
    // }

    if (error || gError || updateError) {
        setSignUpError(error?.message || gError?.message || updateError?.message);
        if (signUpError)
            return <p className='text-red-500 font-bold'><small>{signUpError}</small></p>
    }

    if (token) {
        Cookies.set("loggedin", "true");
        console.log("cookies", Cookies)
        window.location.href = "/";
    }
    console.log(gUser)


    const onSubmit = async (data) => {
        console.log(data)
        const name = data?.name;
        // const name = data.displayName ? data.displayName : gUser?.user?.displayName;
        const email = data.email;
        const age = data.age;
        console.log(name)
        let getage
        if (age < 18 && age > 0) {
            getage = 'young'
        }
        else if (age >= 18) {
            getage = 'adult'
        }

        const userbio = {
            name,
            email,
            getage,
            age,
            role: 'user',
            joined_date: date,
            gems: 0,
            completed_lv: ['0']
        }
        fetch(`https://hello-talk-webserver.vercel.app/user`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gUser ? gUser : userbio)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    localStorage.setItem('email', email)
                    swal("Congratulations! Account created successfully", "success")
                    // googleSubmit()
                } else {
                    swal("OOPS! Something wen wrong :(")
                }
            })
        await createUserWithEmailAndPassword(data.email, data.password, data?.age);
        await updateProfile({ displayName: data.name, age: data?.age });
    };

    return (
        <>
            <Head>
                <title>HelloTalk - Sign Up</title>
            </Head>
            <div className="min-h-screen" style={{ backgroundImage: `url("back.svg")` }}>
                <div className='flex justify-between items-center p-[30px] lg:md:py-[30px] py-[15px]'>
                    <Link href="/"><HiArrowLeft className="text-2xl cursor-pointer" /></Link>

                    <Link href="/signin"><button type="button" className='bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-[18px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] hover:bg-[#ece7e7]'>
                        LOGIN
                    </button></Link>
                </div>
                <div className="my-auto pb-8">
                    {/* <div className="w-[100%] h-[150px]">
                        <Lottie animationData={signup} loop={true} />
                    </div> */}
                    <div className="lg:md:px-[23%] px-[5%]">
                        <div className="border-[2px] rounded-xl w-full bg-[#fff]">
                            <h2 className='lg:md:text-2xl text-lg text-center lg:md:mt-4 mt-2 text-[#3C3C3C] font-featherBold'>Create Your Account</h2>
                            <div className="mt-[25px] my-auto w-full">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                                    <input type="number"
                                        placeholder="Age"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("age", {
                                            required: {
                                                value: true,
                                                message: 'Age is required'
                                            }
                                        })} />
                                    <input type="text"
                                        placeholder="Name"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is required'
                                            }
                                        })} />
                                    <input type="email"
                                        placeholder="Email"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            }
                                        })} />
                                    {errors.email && <span className='text-red-500 text-start pr-3'><small>{errors.email.message}</small></span>}
                                    <input type="password"
                                        placeholder="Password"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("password", {
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\+~`\-={}[\]:;"'<>,\.\?\/]).{8,}$/,
                                                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and must be at least 8 characters"
                                            },
                                            required: {
                                                value: true,
                                                message: 'Password is required'                                                
                                            }
                                        })} />
                                    {errors.password && <span className='text-red-500 text-start pr-3'><small>{errors.password.message}</small></span>}
                                    <button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[40%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px]" type="submit">CREATE ACCOUNT</button>
                                    {/* <div className="text-center font-bold text-lg my-[20px]">OR</div> */}
                                </form>

                                <div className="flex justify-center gap-x-[5px]">
                                    {/* <button
                                        onClick={() => {
                                            signInWithGoogle()
                                            // .then(() => googleSubmit())
                                        }}
                                        className="justify-center flex items-center mt-[15px] bg-[#fff] border-[#CECECE] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#1cb0f6] font-bold text-[14px] focus:border-b-[2px] lg:md:w-[40%] w-[50%] hover:bg-[#E5E5E5]" type="submit"><AiOutlineGoogle className="text-red-400 text-[25px] mr-[4px]" />Google</button> */}
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

export default Signup;