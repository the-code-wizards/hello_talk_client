import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';

const SingleComment = ({ postComment }) => {
    const { name, comment, email, postTime, photoUrl, pid } = postComment
    return (
        <div>
            <div className='mt-3 flex  items-center'>
                <div className="avatar mr-3">
                    <div className="w-6 h-6 rounded-full">
                        <img src={photoUrl} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-[16px]'>{name}</h1>
                </div>
            </div>
            <div className='mt-2' >
                <p className='text-[14px]'>{comment}</p>
            </div>
            <button className='flex  hover:bg-[#F0F2F5] px-2 items-center my-1'><AiTwotoneLike /><span className='ml-1'>Helpful</span></button>
            <div className="divider my-[-2px] "></div>
        </div>
    );
};

export default SingleComment;