import Link from 'next/link';
import React from 'react';
import blockImg from '../../public/blockMascot.png';
import useLevels from '../hooks/useLevels';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LevelBlocks = () => {
  const [user, error] = useAuthState(auth);
  const [levels, loading] = useLevels();
  console.log(levels[0]);
  console.log(user);
  const allLevels = levels[0];
  return (
    <div className="grid lg:md:grid-cols-6 grid-cols-3 gap-x-[10px] lg:md:mt-4 mt-2 m-4 lg:md:gap-x-[12px] h-[10px]">
      {levels?.map((level) => {
        return (
          <>
            <Link href={`/level/${level?.level}`} className="">
              <div className="flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center">
                <img className="w-20" src="https://i.ibb.co/TqQyDqg/block-Mascot.png" alt="/" />
                <span className="btn bg-gradient-to-r from-green-500 to-[#c1ffab] text-[#fff] p-2 
                px-10 border-none text-xl font-semibold mt-[-15px] ">
                  {level?.level}
                </span>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default LevelBlocks;