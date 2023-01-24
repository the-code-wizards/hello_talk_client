import React, { useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

const SinglePost = () => {

    const [commentView, setCommentView] = useState("hidden")

    const commentRender = () => {
        if (commentView === "") {
            setCommentView("hidden")
        }
        else {
            setCommentView("")
        }
    }

    return (
        <div>
            <div className=' bg-white p-3 rounded-2xl mt-8 border border-inherit'>
                <div className=' flex'>
                    <div className="avatar mr-3">
                        <div className="w-8 h-8 rounded-full">
                            <img src="https://i.ibb.co/8Ky4J5L/2-1.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[16px]'>Stylus Pen Comparability</h1>
                        <p className='text-[12px]' >By: Mariaya11 | Jan 17, 2023</p>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-[16px]'>How to find a stylus pen which is compactable with myHp Pavillion ×360 14m-dw1xxx laptop?I searched everywhere i am not able</p>
                </div>
                <div className="divider my-[-2px] "></div>
                <div className='flex justify-between'>
                    <div className='flex justify-center'>
                        <button className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span></button>
                        <div className='flex ml-4 justify-center items-center hover:bg-[#F0F2F5] px-2'>
                            <button onClick={commentRender}><BiCommentDetail /></button>
                            <h1 className='ml-1'>1 replies</h1>
                        </div>
                    </div>
                    <div>
                        <p className='text-[12px]'>Last Activity: Dragon-Fur | Jan 17, 2023</p>
                    </div>
                </div>
                <div className={`px-8 pt-8 ${commentView}`}>
                    <h2 className='text-xl'>Replies </h2>
                    <div className="divider my-[-2px] "></div>
                    <div className='mt-3 flex  items-center'>
                        <div className="avatar mr-3">
                            <div className="w-6 h-6 rounded-full">
                                <img src="https://i.ibb.co/8Ky4J5L/2-1.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[16px]'>Sujoy Paul</h1>
                        </div>
                    </div>
                    <div className='mt-2' >
                        <p className='text-[14px]'>How to find a stylus pen which is compactable with myHp Pavillion ×360 14m-dw1xxx laptop?I searched everywhere i am not able</p>
                    </div>
                    <button className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Helpful</span></button>
                    <div className="divider my-[-2px] "></div>
                </div>
            </div>
        </div >
    );
};

export default SinglePost;