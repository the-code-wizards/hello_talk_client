import React, { useEffect, useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import SingleComment from './SingleComment';

const Single = ({ user, singlePost }) => {
    const [commentView, setCommentView] = useState("hidden")
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState([])

    const commentRender = () => {
        if (commentView === "") {
            setCommentView("hidden")
        }
        else {
            setCommentView("")
        }
    }
    const { photoUrl, email, name, post, postTime, title, _id } = singlePost

    const handleComment = (event) => {
        setShowModal(false)
        event.preventDefault();
        const form = event.target
        const text = form.textarea.value;
        console.log(text)
        const postComment = {
            name: user.displayName,
            comment: text,
            email: user.email,
            postTime: Date(),
            photoUrl: user.photoURL,
            pid: _id
        }
        // console.log(postComment)
        fetch("https://hello-talk-webserver.vercel.app/postcomment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postComment)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                // navigate("/dashboard/myproducts")
                if (res.acknowledged === true) {
                    swal(
                        'Your questions is posted!',
                        'Possible reponse is near !',
                        'success'
                    )
                    form.reset()
                }
            })

    }

    useEffect(() => {
        fetch(`https://hello-talk-webserver.vercel.app/comment/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    const handleLike = () => {
        const postLike = {
            email: user.email,
            postTime: Date(),
            pid: _id
        }
        fetch("https://hello-talk-webserver.vercel.app/postLike", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postLike)
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                // // navigate("/dashboard/myproducts")
                // if (res.acknowledged === true) {
                //     swal(
                //         'Your questions is posted!',
                //         'Possible reponse is near !',
                //         'success'
                //     )
                //     form.reset()
                // }
            })

    }



    return (
        <div>
            <div className=' bg-white p-3 rounded-2xl mt-8 border border-inherit'>
                <div className=' flex'>
                    <div className="avatar mr-3">
                        <div className="w-8 h-8 rounded-full">
                            <img src={photoUrl} alt="" />
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
                        <button onClick={handleLike} className='flex  hover:bg-[#F0F2F5] px-2 items-center '><AiTwotoneLike /><span className='ml-1'>Like</span></button>
                        <div className='flex ml-4 justify-center items-center hover:bg-[#F0F2F5] px-2'>
                            <button onClick={commentRender}><BiCommentDetail /></button>
                            <h1 className='ml-1'>1 replies</h1>
                        </div>
                    </div>
                    <div>
                        <p className='text-[12px]'>Last Activity: {name} | {postTime}</p>
                    </div>
                </div>
                <div className={`px-8 pt-8 ${commentView}`}>
                    <h2 className='text-md'>Replies </h2>
                    <div className="divider my-[-2px] "></div>

                    {
                        comments.map(comment =>
                            <SingleComment
                                key={comment._id}
                                postComment={comment}
                            >
                            </SingleComment>
                        )
                    }

                    <h2 className='text-md my-2 ml-2'>Add a Comment</h2>

                    <div className='grid grid-cols-12'>
                        <div className='grid grid-cols-1 place-items-end col-span-1'>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user?.photoURL} alt="Profile Picture" />
                                </div>
                            </div>
                        </div>

                        <input type="text" name="" id="" className='input input-bordered rounded-full input-primary  ml-2 h-[36px] w-full  bg-[#F0F2F5] px-2 col-span-11' onClick={() => setShowModal(true)} />
                    </div>

                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-xl font-semibold text-center">
                                                Write your Comment
                                            </h3>
                                            <button className=" btn btn-ghost rounded-full" onClick={() => setShowModal(false)}>X</button>

                                        </div>
                                        {/*body*/}
                                        <form onSubmit={handleComment}>
                                            <div className="relative p-6 flex-auto ">
                                                <textarea name='textarea' className="textarea w-[600px] input-bordered " placeholder="Your Comment"></textarea>

                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="btn btn-md btn-ghost mr-2"
                                                    type="submit"


                                                >
                                                    Post
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}



                </div>
            </div>
        </div>
    );
};

export default Single;