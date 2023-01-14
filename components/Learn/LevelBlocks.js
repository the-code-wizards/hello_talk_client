import Link from 'next/link';
import React from 'react';
import blockImg from "../../public/blockMascot.png"

const LevelBlocks = () => {    
    const fakeCourseData = [
        {
            id: 1,
            level: 1,
        },
        {
            id: 2,
            level: 2,
        },
        {
            id: 3,
            level: 3,
        },
        {
            id: 4,
            level: 4,
        },
        {
            id: 5,
            level: 5,
        },
        {
            id: 6,
            level: 6,
        },
        {
            id: 7,
            level: 7,
        },
        {
            id: 8,
            level: 8,
        },
        {
            id: 9,
            level: 9,
        },
        {
            id: 10,
            level: 10,
        },
        {
            id: 11,
            level: 11,
        },
        {
            id: 12,
            level: 12,
        },
        {
            id: 13,
            level: 13,
        },
        {
            id: 14,
            level: 14,
        },
        {
            id: 15,
            level: 15,
        },
        {
            id: 16,
            level: 16,
        },
        {
            id: 17,
            level: 17,
        },
        {
            id: 18,
            level: 18,
        },
        {
            id: 19,
            level: 19,
        },
        {
            id: 20,
            level: 20,
        },
        {
            id: 21,
            level: 21,
        },
        {
            id: 22,
            level: 22,
        },
        {
            id: 23,
            level: 23,
        },
        {
            id: 24,
            level: 24,
        },
        {
            id: 25,
            level: 25,
        },
        {
            id: 26,
            level: 26,
        },
        {
            id: 27,
            level: 27,
        },
        {
            id: 28,
            level: 28,
        },
        {
            id: 29,
            level: 29,
        },
        {
            id: 30,
            level: 30,
        }
    ]
    return (
        <div className="grid grid-cols-7 m-4 gap-x-[12px]">
            {fakeCourseData?.map((data) => {
                return (
                    <>
                        <Link href={`/learn/${data?.id}`} className="">
                            <div className="flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img className="w-20" src="https://i.ibb.co/TqQyDqg/block-Mascot.png" alt="/" />
                                <span className="btn bg-gradient-to-r from-green-500 to-[#c1ffab] text-[#fff] p-2 px-4 border-none text-xl font-semibold mt-[-15px] hover:">
                                    {data?.level}
                                </span>
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>
    );
};

export default LevelBlocks;