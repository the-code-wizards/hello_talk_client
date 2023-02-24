import React, { useEffect, useState } from 'react';
import { useRouter, Router } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import confetti from '../../resources/lottieJson/confetti.json';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';
import Loader from '../Shared/Loader';
import Lottie from "lottie-react";

const SingleLevel = () => {
  const router = useRouter();
  const [user, error] = useAuthState(auth);
  const { level } = router.query;
  const [singleLevel, setSingleLevel] = useState([]);
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [gems, setGems] = useState();
  const [singleUser, loading] = useSingleUser();
  const [token, setToken] = useState();
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    // if (!token) {
    //     window.location.href = "/signin";
    // }
  }, []);

  useEffect(() => {
    setLoadingTwo(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/levels/${level}`)
      .then((res) => {
        setSingleLevel(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingTwo(false);
      });
  }, [level]);

  console.log(router);
  const lv = singleLevel[0];
  const comp_level = {
    completed_lv: lv?.level,
  };
  // const checkAllQuestionsAnswered = () => {
  //   return singleLevel.length === currentQuestion;
  // };
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

  const prevLevel = () => {
    // window.location.href = `/level/${parseInt(lv?.level) - 1}`;
    router.push(`/level/${parseInt(lv?.level) - 1}`);
  };

  useEffect(() => {
    if (score !== null && !singleUser?.completed_lv?.includes(lv?.level)) {
      const percentage = score / lv?.question?.length;
      if (percentage > 0.5) {
        setGems(3);
      } else {
        setGems(1);
      }
    }
  }, [score, lv?.level, singleUser?.completed_lv, lv?.question?.length]);

  const handleNextLevel = () => {
    const completedLv = [...singleUser?.completed_lv];
    completedLv.push(lv?.level);
    axios
      .post(`https://hello-talk-webserver.vercel.app/addgem?email=${user?.email}`,
        {
          mGem: gems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`https://hello-talk-webserver.vercel.app/savelevel?email=${user?.email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(comp_level),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    setShowScore(false);
    setScore(0);
    setGems(0);
    setCurrentQuestion(0);
    router.push(`/level/${parseInt(lv?.level) + 1}`);
  };
  console.log(lv)

  return (
    <div className="lg:md:px-16 px-10 pt-8">
      <Head>
        <title>Level {lv?.level}</title>
      </Head>

      {loading || loadingTwo ? <Loader />
        : (
          <div className="lg:md:px-8 px-3 pb-8 shadow-xl">
            
            {showScore ? (
              <div>
                <div className="w-[300px] h-[300px]  mx-auto">
                  <Lottie animationData={confetti} loop={true} />
                </div>
                <h2 className="text-2xl font-bold text-green-400 text-center">
                  Congratulations! <br />
                  You Scored {score} out of {lv?.question?.length}
                </h2>
              </div>
            ) :
              singleLevel[0]?.question ? (
                <>
                  <div className="mb-4">
                    <h2 className="lg:md:text-xl text-lg text-green-500 font-bold text-center lg:md:mb-2 mb-4">
                      {lv?.question[currentQuestion]?.question_no}.{' '}
                      <span>{lv?.question[currentQuestion]?.question}</span>
                    </h2>
                    {lv?.question[currentQuestion]?.options.map((opt) => (
                      <div key={opt?.opt} className="form-control">
                        <button
                          className="lg:md:text-[16px] text-[14px] btn bg-[#fff] border-[2px] 
                                            border-[rgb(13,201,75)] hover:border-[rgb(13,201,75)] hover:bg-[#d3f7de] mb-2 text-[#AAADBA] "
                          onClick={() => handleAnswerOptionClick(opt?.opt)}
                        >
                          {opt?.opt}
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                lv?.story && (
                  <>
                    <h2 className="text-xl text-green-500 font-bold text-center mb-2">
                      {lv?.story?.slice(0, 15)}
                    </h2>
                    <p className="text-[18px]">{lv?.story}</p>
                  </>
                )
              )
            }
            <div className="flex justify-between">
              <button
                onClick={prevLevel}
                className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
              >
                PREV
              </button>
              {/* {singleLevel[0]?.question.length === currentQuestion} */}
              <button
                onClick={handleNextLevel}
                className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
              >
                NEXT
              </button>
            </div>
          </div>
          
        )
      }
    </div >
  );
};
export default SingleLevel;