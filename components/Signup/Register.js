import Link from 'next/link';
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';
import axios from 'axios';

const Register = () => {
    const [finalage, setFinalage] = useState('young')
    const [age, setAge] = useState();
    const [loading, setLoading] = useState()
    const [token, setToken] = useState()

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
    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    if (loading) {
        return <progress className='progress w-full'></progress>
    }
    const onSignUp = async (data) => {
        setLoading(true)
        const name = data?.name;
        const password = data?.password;
        const email = data.email;
        const age = data.age;
        let getage;
        if (age < 18 && age > 0) {
            getage = 'young'
        }
        else if (age >= 18) {
            getage = 'adult'
        }
        console.log(data)
        const userbio = {
            name,
            email,
            getage,
            password,
            age,
            role: 'user',
            joined_date: date,
            gems: 0
        }
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(userbio);
            const res = await axios.post("https://hello-talk-webserver.vercel.app/registration", body, config);
            if (res?.status === 200) {
                setLoading(false)
                setToken(res?.data?.token)
                localStorage.setItem("token", token)
                Swal.fire({
                    icon: 'success',
                    text: 'Success',
                    title: 'Account Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        } catch (err) {
            setLoading(false)
            Swal.fire({
                icon: 'error',
                text: err?.response.data.message,
                title: 'OOOPS',
                showConfirmButton: false,
                timer: 1500
            })
            console.error(err?.response.data.message);
        }
    }
    if (token) {
        Cookies.set("loggedin", "true");
        console.log("cookies", Cookies)
        window.location.href = "/";
    }
    const googleSubmit = () => {
        const gData = {
            name: gUser?.user?.displayName,
            email: gUser?.user?.email,
            profileImg: gUser?.user?.photoURL,
            getage: 'young',
            joined_date: date,
            role: 'user',
            gems: 0
        }
        console.log(gData)
        fetch(`https://hello-talk-webserver.vercel.app/user`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal("Congratulations! Account created successfully")
                } else {
                    swal("OOPS! Something wen wrong :(")
                }
            })
    }


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
                    <div className="lg:md:px-[23%] px-[5%]">
                        <div className="border-[2px] rounded-xl w-full bg-[#fff]">
                            <h2 className='lg:md:text-2xl text-lg text-center lg:md:mt-4 mt-2 text-[#3C3C3C] font-featherBold'>Create Your Account</h2>
                            <div className="mt-[25px] my-auto w-full">
                                <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col items-center">
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
                                    <input type="password"
                                        placeholder="Password"
                                        className="input lg:md:w-full max-w-sm lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            }
                                        })} />

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

export default Register;