import React from 'react';
import { TbCrown } from 'react-icons/tb';
import { useRouter } from 'next/router'
import Link from 'next/link';

const LeaderBoardCard = () => {
    const router = useRouter()
    return (
        <div>
            <div className="card shadow-xl p-2 m-4 lg:md:mt-4 mt-8">
                <div className="avatar flex justify-center ">
                    <div className="w-20 rounded-full ring ring-[#ddd] ">
                        <h2 className="text-2xl font-bold text-green-500 flex justify-center items-center my-auto mt-[24px]"><TbCrown className="text-yellow-500 text-4xl"/>12</h2>
                    </div>
                </div>
                <div className="card-body items-center text-center mt-[-20px]">
                    <h2 className="italic font-bold text-xxl text-[#333]">Einstein Jackson</h2>
                    <div className="card-actions">
                        <Link href="/leaderboard">
                            <button type="button" className="bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] px-4">See Leader Board</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardCard;