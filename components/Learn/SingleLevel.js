import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link';

const SingleLevel = () => {
    const router = useRouter()
    const { level } = router.query
    const [singleLevel, setSingleLevel] = useState([])
    // const [optData, setOptData] = useState();
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    // console.log(optData)
    useEffect(() => {
        setLoading(true);
        axios.get(`https://hello-talk-webserver.vercel.app/levels/${level}`
        )
            .then((res) => {
                setSingleLevel(res.data);
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
    console.log(lv?.question[currentQuestion]?.answer)
    return (
        <div className='pt-20 px-16'>
            <Link href="/learn" className=''>Go Back</Link>
            <div className='px-8 pt-8 shadow-xl'>
                {showScore ? (
                    <>
                        <h2 classNam="text-2xl font-featherbold text-green-400 ">You Scored {score} out of {lv?.question?.length}</h2>
                    </>)
                    :
                    singleLevel[0]?.question ?
                        <>
                            <div className="mb-4">
                                <h2 className='text-xl text-green-500 font-bold'>{lv?.question[currentQuestion]?.question_no}. <span>{lv?.question[currentQuestion]?.question}</span></h2>
                                {lv?.question[currentQuestion]?.options.map((opt) => (
                                    <div key={opt?.opt} className="form-control">
                                        <button onClick={() => handleAnswerOptionClick(opt?.opt)}>{opt?.opt}</button>
                                    </div>
                                ))}
                            </div>
                        </>
                        : lv?.story &&
                        <>
                        </>
                }
            </div>
        </div>
    );
};

export default SingleLevel;