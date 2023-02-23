import React, { useEffect, useState } from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import SingleComment from './SingleComment';
import { useRouter } from 'next/router';
import { IoMdSend } from 'react-icons/io';
import { useQuery } from 'react-query';
import { FaUserPlus } from 'react-icons/fa';
import useSingleUser from '../hooks/useSingleUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LikeButton from './Components/LikeButton';
import Link from 'next/link';
import Modal from './Modal';

const Single = ({ singlePost }) => {
    const [user, error] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState([])
    const [reqButtonS, setReqButtonS] = useState(false)
    const router = useRouter()
    const [singleUser] = useSingleUser({});


    const { photoUrl, email, name, post, postTime, title, _id } = singlePost


    const { data: reqStatus = [], refetch, isLoading } = useQuery({
        queryKey: ["reqStatus", singleUser?.email],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/community/srequested?email=${user?.email}&remail=${email}`);
            const data = await res.json();
            // console.log(data)
            if (data.length) {
                // console.log(data)
                setReqButtonS(true)
            }
            else {
                setReqButtonS(false)
            }
            return data;
        }
    })


    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/community/comment/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))


    }, [_id])


    const handleAddFriend = () => {
        const friendData = {
            senderEmail: user.email,
            senderImg: singleUser.photoURL,
            senderName: singleUser.name,
            reciverEmail: email,
            reciverImg: photoUrl,
            reciverName: name,
            status: "pending"
        }
        fetch("https://hello-talk-webserver.vercel.app/community/connect", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(friendData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.insertedId) {
                    // console.log(res)
                    refetch()
                }
            })

    }

    const handleReqDeny = () => {
        fetch(`https://hello-talk-webserver.vercel.app/community/reqestdeny?email=${user?.email}&remail=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refetch()
            })
    }



    return (
        <div>
            <div className=' bg-white p-3 rounded-2xl mt-5 border border-inherit'>
                <div className="dropdown dropdown-top dropdown-hover">
                    <label tabIndex={0} className="flex justify-center items-center cursor-pointer hover:text-green-300">
                        <div className="mr-2">
                            <div className="avatar p-1  hover:bg-green-300 rounded-full">
                                <div className="w-10 rounded-full bg-green-400 ring-2 ring-gray-50">
                                    {photoUrl ? (
                                        <img src={photoUrl} />
                                    ) : (
                                        <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[17px] font-semibold ' onClick={() => setShowModal(true)}>{name}</h1>
                            <p className='text-[12px]' >at :{postTime}</p>
                        </div>
                    </label>
                    <div tabIndex={0} className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-[#14678F]">
                        {
                            singleUser.email !== email ?
                                <div>
                                    <div className='flex justify-start items-center'>
                                        <div className="avatar p-1  rounded-full">
                                            <div className="w-7 h-7 rounded-full ">
                                                {
                                                    photoUrl ?
                                                        <img src={photoUrl} alt="" />
                                                        :
                                                        <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                                }
                                            </div>
                                        </div>
                                        <div className='text-white'>
                                            <h1 className='text-[17px]'>
                                                {name}
                                            </h1>
                                            <h2 className='text-[10px] mt-[-4px]'>
                                                User science 2 Month Ago
                                            </h2>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            !reqButtonS ?
                                                < button className='btn btn-ghost btn-sm flex items-center text-white' onClick={handleAddFriend}><FaUserPlus className='mr-1' />Add Friend</button>
                                                :
                                                < button onClick={handleReqDeny} className='btn btn-ghost btn-sm flex items-center text-white' ><FaUserPlus className='mr-1' />Requested</button>
                                        }
                                    </div>
                                </div>
                                :
                                <Link href="/dashboard/myprofile">< button className='btn btn-ghost btn-sm flex items-center text-white' > <CgProfile className='h-5 mr-1' /> See My profile</button></Link>

                        }

                    </div>
                </div>

                <h1 className='p-3 font-semibold'>{title}</h1>
                <div className='px-3 pb-3 pt-1'>
                    <p className='text-[16px]'>{post}</p>
                </div>
                <div className="divider my-[-2px] "></div>
                <div className='flex justify-between'>
                    <div className='flex justify-center'>

                        <LikeButton
                            id={_id}
                            email={user?.email}
                        ></LikeButton>

                        <div className='flex ml-4 justify-center items-center hover:bg-[#F0F2F5] px-2'>
                            <button onClick={() => setShowModal(true)} className="flex items-center"><BiCommentDetail /> <h1 className='ml-1'>{comments.length} replies</h1></button>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <p className='text-[12px]'>Last Activity: {name} | {postTime}</p>
                    </div>
                </div>

                {showModal ? (
                    <>
                        <Modal
                            singlePost={singlePost}
                            setShowModal={setShowModal}
                        ></Modal>
                    </>
                ) : null}
            </div>
        </div >
    );
};

export default Single;