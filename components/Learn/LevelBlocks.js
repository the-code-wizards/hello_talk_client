import Link from 'next/link';
import React, { useRef } from 'react';
import blockImg from '../../public/blockMascot.png';
import useLevels from '../hooks/useLevels';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';
import Cert from './Cert';
import ReactToPrint from 'react-to-print';
import Loader from '../Shared/Loader';

const LevelBlocks = () => {
  const [user, error] = useAuthState(auth);
  const [levels, loading2] = useLevels();
  const [singleUser, loading] = useSingleUser()
  console.log(singleUser)
  // console.log(levels)
  if (loading || loading2) {
    return <Loader/>
  }
  const sortedLevels = [...levels].sort((a, b) => a.level - b.level);
  const nextLevel = singleUser.completed_lv && sortedLevels.find(level => !singleUser.completed_lv.includes(level.level.toString()));
  console.log(nextLevel)
  return (
    <div className="flex flex-col items-center">
      {singleUser?.completed_lv && singleUser?.completed_lv.length === (levels?.length+1) &&
        <>
          <Link href="/printcert"><button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[100%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] px-2">Print Your Certificate</button></Link>
        </>}

      <div className="grid lg:md:grid-cols-6 grid-cols-3 gap-x-[10px] lg:md:mt-4 m-4 lg:md:gap-x-[12px] h-[10px] lg:md:ml-4">
        {
          sortedLevels?.map((level) => {
            const isCompleted = singleUser?.completed_lv?.includes(level?.level);
            const isNext = !isCompleted && nextLevel?.level === level?.level;
            return (
              <>
                
                {
                  level?.level == 1 ?
                    <>
                      <Link href={`/level/${level.level}`} className="">
                        <div className="flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center">
                          <img className="w-20" src="https://i.ibb.co/TqQyDqg/block-Mascot.png" alt="/" />
                          <span
                            className="btn bg-gradient-to-r from-green-500 to-[#c1ffab] text-[#fff] p-2 
                px-10 border-none text-xl font-semibold mt-[-15px] "
                          >
                            {level.level}
                          </span>
                        </div>
                      </Link></>
                    : isCompleted || isNext ?
                      <>
                        <Link href={`/level/${level.level}`} className="">
                          <div className="flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center">
                            <img className="w-20" src="https://i.ibb.co/TqQyDqg/block-Mascot.png" alt="/" />
                            <span
                              className="btn bg-gradient-to-r from-green-500 to-[#c1ffab] text-[#fff] p-2 
                px-10 border-none text-xl font-semibold mt-[-15px] "
                            >
                              {level.level}
                            </span>
                          </div>
                        </Link>
                      </>
                      :
                      <>
                        {/* <Link href={`/level/${level.level}`} className=""> */}
                        <div data-tip="Complete previous level" className="tooltip-success tooltip:text-[10px] tooltip flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center">
                          <img className="w-20" src="https://i.ibb.co/TqQyDqg/block-Mascot.png" alt="/" />
                          <span
                            className="btn bg-[#2b2b2b] text-[#fff] p-2 
                px-10 border-none text-xl font-semibold mt-[-15px] "
                          >
                            {level.level}
                          </span>
                        </div>
                        {/* </Link> */}
                      </>
                }
              </>
            );
          })}
      </div>
    </div>
  );
};

export default LevelBlocks;
