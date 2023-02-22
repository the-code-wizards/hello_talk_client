import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import useSingleUser from '../hooks/useSingleUser';

const WriteaPost = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, error] = useAuthState(auth);
    const currentdate = new Date();
    const [singleUser] = useSingleUser({});


    const date = currentdate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const handlePost = (event) => {
        setShowModal(false)
        event.preventDefault();
        const form = event.target
        const text = form.textarea.value;
        const title = form.title.value;
        console.log(text)
        const postData = {
            name: user.displayName,
            post: text,
            email: user.email,
            postTime: date,
            title: title,
            photoUrl: singleUser.photoURL
        }

        fetch("https://hello-talk-webserver.vercel.app/community/addapost", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                // navigate("/dashboard/myproducts")
                // reset()
                swal(
                    'Your question is Posted. You got 2 Gems',
                    'success'
                )
            })

    }


    return (
        <div>
            <div className=' bg-white p-5 rounded-lg flex border border-[#005C85]'>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className="avatar">
                        <div className="w-10 rounded-full bg-[#d6e8ff] ring-2 ring-gray-50">
                            {singleUser?.photoURL ? (
                                <img src={singleUser?.photoURL} />
                            ) : (
                                <span className="flex justify-center mt-[5px] text-[1.2rem]">
                                    {singleUser?.name?.slice(0, 2)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <input type="text" name="" id="" className='input input-bordered  rounded-full border-[#005C85]  ml-2  w-full bg-[#F0F2F5] px-2 cursor-pointer' readOnly onClick={() => setShowModal(true)} placeholder="Post your question..." />
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
                                        Write your Question
                                    </h3>
                                    <button className=" bg-[#58cc02] border-[#61B800] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] hover:bg-[#61E002] " onClick={() => setShowModal(false)}>X</button>

                                </div>
                                {/*body*/}
                                <form onSubmit={handlePost}>
                                    <div className="relative px-6 flex-auto ">
                                        <label className="label">
                                            <span className="label-text text-[#333] font-semibold">Question Title:</span>
                                        </label>
                                        <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full bg-[#ddd] placeholder:text-[14px]" required />
                                        <label className="label">
                                            <span className="label-text text-[#333] font-semibold"> Question details:</span>
                                        </label>
                                        <textarea name='textarea' className="textarea w-[600px] placeholder:text-[14px] bg-[#ddd] input-bordered " placeholder="Your question" required></textarea>

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b my-4">
                                        <button
                                            className="bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002] mr-2"
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
    );
};

export default WriteaPost;