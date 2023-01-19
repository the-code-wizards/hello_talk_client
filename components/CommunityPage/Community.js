import React from 'react';
import Sidebar from '../Learn/Sidebar';
import Lottie from "lottie-react";
import community from "../../resources/lottieJson/community.json";

const Community = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 max-w-[1240px] mx-auto '>
                <div className='place-self-center p-4'>
                    <h1 className='text-6xl text-green-400 font-featherbold'>Welcome to the <br /> HelloTalk Community!</h1>
                    <p className='text-[20px]'>A place where you can find great tips and helpful solutions from other HelloTalk users</p>
                    <div className='grid grid-cols-7 place-items-center pt-3'>
                        <div className="flex items-center justify-center col-span-4">
                            <div className="flex border-2 rounded">
                                <input type="text" className="px-4 py-2 w-60" placeholder="Search..." />
                                <button className="flex items-center justify-center px-4 border-l">
                                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button className='btn btn-outline px-[5px] col-span-3'>
                            Start Converstaion
                        </button>
                    </div>
                    <div className='mt-10 grid grid-cols-3'>
                        <div className='flex'>
                            <img src="https://h30434.www3.hp.com/html/assets/ic_discussions.svg" alt="" className='mr-2' />
                            <div>
                                <p className=''>2,159,515</p>
                                <p className='mt-[-3px]'>Discussions</p>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                        </div>
                        <div className='flex'>
                            <img src="https://h30434.www3.hp.com/html/assets/ic_member.svg" alt="" className='mr-2' />
                            <div>
                                <p className=''>3,785,415</p>
                                <p className='mt-[-3px]'>Members</p>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                        </div>
                        <div className='flex'>
                            <img src="https://h30434.www3.hp.com/html/assets/ic_solutions_banner.svg" alt="" className='mr-2' />
                            <div>
                                <p className=''>128,807</p>
                                <p className='mt-[-3px]'>Solutions</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Lottie animationData={community} loop={true} />
            </div>
            {/* >>>>>>> Dicusion <<<<<<  */}
            <div className='bg-[#DAF7DE] mt-5 p-2'>
                <div className='max-w-[1240px] mx-auto'>
                    <div className='mt-10'>
                        <h1 className='text-[40px]'>Community Dicussions</h1>
                    </div>
                    <div className='p-3 border border-inherit'>
                        <h1 className='text-xl mb-3'>Add a Question</h1>
                        <div className='flex'>
                            <input type="text " className='w-[600px]' />
                            <button className='ml-3 btn btn-outline'>Submit</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-9 p-2 gap-6 '>
                        <div className='col-span-6 '>
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
                                    <div className='flex ml-4'>
                                        <img src="https://h30434.www3.hp.com/html/assets/ic_replies.svg" alt="" className='mr-2' />
                                        <h1>1 replies</h1>
                                    </div>

                                    <div>
                                        <p className='text-[12px]'>Last Activity: Dragon-Fur | Jan 17, 2023</p>
                                    </div>
                                </div>
                            </div>
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
                                    <div className='flex ml-4'>
                                        <img src="https://h30434.www3.hp.com/html/assets/ic_replies.svg" alt="" className='mr-2' />
                                        <h1>1 replies</h1>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Last Activity: Dragon-Fur | Jan 17, 2023</p>
                                    </div>
                                </div>
                            </div>
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
                                    <div className='flex ml-4'>
                                        <img src="https://h30434.www3.hp.com/html/assets/ic_replies.svg" alt="" className='mr-2' />
                                        <h1>1 replies</h1>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Last Activity: Dragon-Fur | Jan 17, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* >>>>>>>> Leader chart <<<<<<<<<<<<<<<<  */}
                        <div className='col-span-3 mt-8'>
                            <div className="card w-80 bg-base-100 shadow-xl">
                                <div className='bg-[#92deff] rounded-t-lg p-2'>
                                    <h1 className='text-[24px] mt-2 text-center bg-white rounded-lg'>Top Helpful Author</h1>
                                    <div className='grid grid-cols-10 '>
                                        <div className='col-span-3 place-self-center mt-4'>
                                            <div className="avatar ">
                                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
                                            <div className=' bg-white mt-2 rounded-lg'>
                                                <h1 className='text-[14px] text-center font-bold '>banhien</h1>
                                                <p className=' text-[14px] text-center font-bold'>#2</p>
                                            </div>

                                        </div>
                                        <div className='mx-3 col-span-4 mt-5'>
                                            <div className="avatar  place-self-center">
                                                <div className="w-24 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2 mt-4">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
                                            <div className=' bg-white mt-2 rounded-lg'>
                                                <h1 className='text-[14px] text-center font-bold'>banhien</h1>
                                                <p className=' text-[14px] text-center font-bold'>#1</p>
                                            </div>
                                        </div>
                                        <div className='col-span-3 place-self-center mt-5'>
                                            <div className="avatar ">
                                                <div className="w-16 rounded-full ring ring-[#189bd3] ring-offset-base-100 ring-offset-2">
                                                    <img src="https://placeimg.com/192/192/people" />
                                                </div>
                                            </div>
                                            <div className=' bg-white mt-2 rounded-lg'>
                                                <h1 className='text-[14px] text-center font-bold'>banhien</h1>
                                                <p className=' text-[14px] text-center font-bold'>#3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div>
                                        <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-3'>
                                            <h1 className='col-span-2 place-self-center'>#4</h1>
                                            <div className='flex col-span-10 items-center'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src="https://placeimg.com/192/192/people" />
                                                    </div>
                                                </div>
                                                <h1 className='ml-2'>
                                                    Shimul Islam
                                                </h1>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-3'>
                                            <h1 className='col-span-2 place-self-center'>#4</h1>
                                            <div className='flex col-span-10 items-center'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src="https://placeimg.com/192/192/people" />
                                                    </div>
                                                </div>
                                                <h1 className='ml-2'>
                                                    Shimul Islam
                                                </h1>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-3'>
                                            <h1 className='col-span-2 place-self-center'>#4</h1>
                                            <div className='flex col-span-10 items-center'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src="https://placeimg.com/192/192/people" />
                                                    </div>
                                                </div>
                                                <h1 className='ml-2'>
                                                    Shimul Islam
                                                </h1>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-3'>
                                            <h1 className='col-span-2 place-self-center'>#4</h1>
                                            <div className='flex col-span-10 items-center'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src="https://placeimg.com/192/192/people" />
                                                    </div>
                                                </div>
                                                <h1 className='ml-2'>
                                                    Shimul Islam
                                                </h1>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-12 bg-[#F8EDE3] p-2 rounded-lg mt-3'>
                                            <h1 className='col-span-2 place-self-center'>#4</h1>
                                            <div className='flex col-span-10 items-center'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full">
                                                        <img src="https://placeimg.com/192/192/people" />
                                                    </div>
                                                </div>
                                                <h1 className='ml-2'>
                                                    Shimul Islam
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;