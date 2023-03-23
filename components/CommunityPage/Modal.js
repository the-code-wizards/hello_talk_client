import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import { BiCommentDetail } from 'react-icons/bi';
import LikeButton from './Components/LikeButton';
import { IoMdSend } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';

const Modal = ({ singlePost, setShowModal }) => {
    const [user, error] = useAuthState(auth);
    const [singleUser] = useSingleUser({});
    const [comments, setComments] = useState([])
    const { photoUrl, name, post, postTime, title, _id } = singlePost

    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target
        const comment = form.comment.value;
        console.log(comment)
        const postComment = {
            name: user.displayName,
            comment: comment,
            email: singleUser?.email,
            postTime: Date(),
            photoUrl: singleUser?.photoUrl,
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


    }, [_id])


    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none "
            >
                <div className="relative lg:w-[700px] sm:[350px] ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t ">
                            <h3 className="text-xl font-bold text-center">
                                {name}&apos;s Post
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
                                            photoUrl ?
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
                                                    singleUser ?
                                                        <img src={singleUser?.photoURL} alt="Profile Picture" />
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

                                </>
                        }

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

export default Modal;