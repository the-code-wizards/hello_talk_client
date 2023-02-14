import React, { useEffect, useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import swal from 'sweetalert';
import SingleComment from './SingleComment';
import { useRouter } from 'next/router';
import { IoMdSend } from 'react-icons/io';
import { useQuery } from 'react-query';
import { FaUserPlus } from 'react-icons/fa';

const Single = ({ user, singlePost }) => {
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState([])
    const [likeButton, SetLikeButton] = useState(false)
    const router = useRouter()


    const { photoUrl, email, name, post, postTime, title, _id } = singlePost

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target
        const comment = form.comment.value;
        console.log(comment)
        const postComment = {
            name: user.displayName,
            comment: comment,
            email: user.email,
            postTime: Date(),
            photoUrl: user.photoURL,
            pid: _id
        }
        // console.log(postComment)
        fetch("https://hello-talk-webserver.vercel.app/community/postcomment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postComment)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.acknowledged === true) {
                    form.reset()
                    setComments([...comments, postComment])

                }
            })

    }


    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/community/comment/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))


    }, [])


    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/community/like?email=${user?.email}&id=${_id}`)
            .then(res => res.json())
            .then(res => {
                if (res.length >= 1) {
                    SetLikeButton(true)
                }
                console.log(res)
            })

    }, [user?.email, _id])


    const handleLike = () => {
        const postLike = {
            email: user.email,
            postTime: Date(),
            pid: _id
        }
        fetch("https://hello-talk-webserver.vercel.app/community/postlike", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postLike)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    console.log(res)
                    SetLikeButton(true)
                }
            })

    }

    const handleUnlike = () => {
        fetch(`https://hello-talk-webserver.vercel.app/community/like/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.deletedCount >= 1) {
                    SetLikeButton(false)
                }
            })

    }

    const handleAddFriend = () => {
        const friendData = {
            senderEmail: user.email,
            senderImg: user.photoURL,
            senderName: user.name,
            reciverEmail: email,
            reciverImg: photoUrl,
            reciverName: name,
            status: "pending"
        }
        fetch("https://hello-talk-webserver.vercel.app/connect", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(friendData)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    console.log(res)
                }
            })

    }




    return (
        <div>
            <div className=' bg-white p-3 rounded-2xl mt-5 border border-inherit'>
                <div className=' flex'>
                    <div className="dropdown dropdown-top dropdown-hover">
                        <label tabIndex={0} className="mr-2">
                            <div className="avatar p-1  hover:bg-green-300 rounded-full">
                                <div className="w-8 h-8 rounded-full ">
                                    {
                                        photoUrl ?
                                            <img src={photoUrl} alt="" />
                                            :
                                            <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                    }
                                </div>
                            </div>
                        </label>
                        <div tabIndex={0} className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-[#14678F]">
                            <div className='flex justify-center items-center'>
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
                            <button className='btn btn-ghost btn-sm flex items-center text-white' onClick={handleAddFriend}><FaUserPlus className='mr-1' />Add Friend</button>
                        </div>
                    </div>


                    <div>
                        <h1 className='text-[16px]' onClick={() => setShowModal(true)}>{title}</h1>
                        <p className='text-[12px]' >By: {name} | {postTime}</p>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-[16px]'>{post}</p>
                </div>
                <div className="divider my-[-2px] "></div>
                <div className='flex justify-between'>
                    <div className='flex justify-center'>

                        {
                            likeButton ?
                                <button className='flex bg-[#F0F2F5] px-2 items-center ' onClick={handleUnlike}><AiTwotoneLike /><span className='ml-1'>Liked</span></button>
                                :
                                <button onClick={handleLike} className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span></button>
                        }
                        <div className='flex ml-4 justify-center items-center hover:bg-[#F0F2F5] px-2'>
                            <button onClick={() => setShowModal(true)} className="flex items-center"><BiCommentDetail /> <h1 className='ml-1'>{comments.length} replies</h1></button>
                        </div>
                    </div>
                    <div>
                        <p className='text-[12px]'>Last Activity: {name} | {postTime}</p>
                    </div>
                </div>

                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none "
                        >
                            <div className="relative lg:w-[700px] sm:[350px] ">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t ">
                                        <h3 className="text-xl font-bold text-center">
                                            Galibs Post
                                        </h3>
                                        <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setShowModal(false)}>✕</label>

                                    </div>
                                    {/*body*/}
                                    <div className={`px-4 h-[70vh] md:w-[700px]  sm:w-full overflow-y-auto`}>

                                        {/*__________ Post Details__________  */}
                                        <div className=' flex mt-2'>
                                            <div className="avatar mr-3">
                                                <div className="w-8 h-8 rounded-full">
                                                    {
                                                        user?.photoURL ?
                                                            <img src={photoUrl} alt="" />
                                                            :
                                                            <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-[16px]'>{title}</h1>
                                                <p className='text-[12px]' >By: {name} | {postTime}</p>
                                            </div>
                                        </div>
                                        <div className='p-3'>
                                            <p className='text-[16px]'>How to find a stylus pen which is compactable with myHp Pavillion ×360 14m-dw1xxx laptop?I searched everywhere i am not able</p>
                                        </div>
                                        <div className="divider my-[-2px] "></div>
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center'>

                                                {
                                                    likeButton ?
                                                        <button className='flex bg-[#F0F2F5] px-2 items-center ' onClick={handleUnlike}><AiTwotoneLike /><span className='ml-1'>Liked</span></button>
                                                        :
                                                        <button onClick={handleLike} className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span></button>
                                                }
                                                <div className='flex ml-4 justify-center items-center hover:bg-[#F0F2F5] px-2'>
                                                    <button onClick={() => setShowModal(true)} className="flex items-center"><BiCommentDetail /> <h1 className='ml-1'>{comments.length} replies</h1></button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[12px]'>Last Activity: {name} | {postTime}</p>
                                            </div>
                                        </div>

                                        {/*__________ Comment__________  */}
                                        {
                                            comments.length ?
                                                <>
                                                    <h2 className='text-md mt-3 ml-2'>Replies </h2>
                                                    <div className="divider my-[-2px] "></div>

                                                    <div className='mb-3'>
                                                        {
                                                            comments.map(comment =>
                                                                <SingleComment
                                                                    key={comment._id}
                                                                    postComment={comment}
                                                                    user={user}
                                                                    comments={comments}
                                                                    setComments={setComments}
                                                                >
                                                                </SingleComment>
                                                            )
                                                        }

                                                    </div>
                                                </>
                                                :
                                                <>
                                                </>
                                        }



                                    </div>
                                    {
                                        user ?
                                            <div className='grid grid-cols-12 ml-[-10px] my-2 px-6'>
                                                <div className='grid grid-cols-1 place-items-center col-span-1'>
                                                    <div className="avatar">
                                                        <div className="w-8 rounded-full">
                                                            {
                                                                user?.photoURL ?
                                                                    <img src={user?.photoURL} alt="Profile Picture" />
                                                                    :
                                                                    <img src="https://i.ibb.co/WnxWNTP/User-Profile-PNG.png" alt="Profile Picture" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <form action="" onSubmit={handleComment} className="col-span-11 flex">
                                                    <input type="text" name="comment" id="" className='input input-bordered rounded-full input-primary mr-2 h-[36px] w-full  bg-[#F0F2F5] ' />
                                                    <button type='submit' className=' btn-ghost rounded-lg'><IoMdSend className='h-7 w-7' /></button>
                                                </form>

                                            </div>
                                            :
                                            <>
                                                <input type="text" name="" id="" className='input input-bordered rounded-full input-primary mr-2 h-[36px] w-full  bg-[#F0F2F5] col-span-11 mb-2 px-6' onClick={() => router.push("/signin/")} />
                                            </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Single;