import React, { useEffect, useState } from 'react';
import { useRouter, Router } from 'next/router'
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Lottie from "lottie-react";
import confetti from "../../resources/lottieJson/confetti.json";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../shared/Loader/Loader';

const SingleLevel = () => {
    const router = useRouter()
    const [user, error] = useAuthState(auth);
    const { level } = router.query
    const [singleLevel, setSingleLevel] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [gems, setGems] = useState();

    // useEffect(() => {
    //     if (!user) {
    //         window.location.href = "/signin";
    //     }
    // }, []);

    // console.log(optData)
    useEffect(() => {
        setLoading(true);
        axios.get(`https://hello-talk-webserver.vercel.app/levels/${level}`
        )
            .then((res) => {
                setSingleLevel(res?.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [level]);


    const lv = singleLevel[0];

    const handleAnswerOptionClick = (opt) => {
        if (opt === lv?.question[currentQuestion]?.answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < lv?.question.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    console.log(lv?.question && lv?.question[currentQuestion]?.answer)
    console.log(lv)
    useEffect(() => {
        const percentage = score / lv?.question?.length
        if (percentage > .5) {
            setGems(3)
        } else if (percentage <= .5 && percentage > 0) {
            setGems(2)
        }
    }, [score, lv?.question?.length]);

    useEffect(() => {
        if (gems !== 0) {
            fetch(`https://hello-talk-webserver.vercel.app/addgem?${user?.email}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(gems)
            })
                .then(res => res.json())
                .then(data => {
                    console.log( data);
                })
                .catch(error => {
            console.log(error);
        });
        }

    }, [user]);

    // axios.put('https://hello-talk-webserver.vercel.app/addgem', data)
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    const nextLevel = () => {
        setGems(1)
        window.location.href = `/level/${parseInt(lv?.level) + 1}`
    }
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <Head>
                <title>Level {lv?.level}</title>
            </Head>
            <div className='px-16 pt-8'>
                {
                    <>
                        <div className='px-8 pb-8 shadow-xl'>
                            {
                                showScore ? (
                                    <>
                                        <div className="w-[300px] h-[300px]  mx-auto">
                                            <Lottie animationData={confetti} loop={true} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-green-400 text-center">Congratulations! <br />
                                            You Scored {score} out of {lv?.question?.length}</h2>
                                    </>)
                                    :
                                    singleLevel[0]?.question ?
                                        <>
                                            <div className="mb-4">
                                                <h2 className='text-xl text-green-500 font-bold text-center mb-2'>{lv?.question[currentQuestion]?.question_no}. <span>{lv?.question[currentQuestion]?.question}</span></h2>
                                                {lv?.question[currentQuestion]?.options.map((opt) => (
                                                    <div key={opt?.opt} className="form-control">
                                                        <button className='btn bg-[#fff] border-[2px] 
                                            border-[rgb(13,201,75)] hover:border-[rgb(13,201,75)] hover:bg-[#d3f7de] mb-2' onClick={() => handleAnswerOptionClick(opt?.opt)}>{opt?.opt}</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                        : lv?.story &&
                                        <>
                                            <h2 className="text-xl text-green-500 font-bold text-center mb-2">{lv?.story?.slice(0, 15)}</h2>
                                            <p className="text-[18px]">{lv?.story}</p>
                                        </>
                            }


                        </div>
                        <div className="flex justify-between">
                            <Link href={`/level/${parseInt(lv?.level) - 1}`}>
                                <button className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]">PREV</button>
                            </Link>
                            <button onClick={nextLevel} className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]">NEXT</button>
                        </div></>
                }
            </div></>
    );
};

export default SingleLevel;