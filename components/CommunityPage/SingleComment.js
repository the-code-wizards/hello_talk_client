import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';

const SingleComment = ({ postComment }) => {
    const { name, comment, email, postTime, photoUrl, pid } = postComment
    return (
        <div className='bg-[#F0F2F5]  rounded-lg mt-2 p-1'>
            <div className='mt-1 flex  items-center '>
                <div className="avatar mr-3">
                    <div className="w-6 h-6 rounded-full">
                        <img src={photoUrl} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-[16px]'>{name}</h1>
                    <h2 className='text-[10px]'>{postTime}</h2>
                </div>
            </div>
            <div className='ml-9 mt-1' >
                <p className='text-[15px]'>{comment}</p>
                <div className='flex '>
                    <button className='flex  hover:bg-[#F0F2F5] items-center'><span className=' text-[15px] text-[#'>Like</span></button>
                    <button className='flex  hover:bg-[#F0F2F5] items-center ml-2'><span className=' text-[15px] text-[#'>Reply</span></button>
                </div>
            </div>

        </div>
    );
};

export default SingleComment;