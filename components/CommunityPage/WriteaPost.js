import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const WriteaPost = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, error] = useAuthState(auth);
    const currentdate = new Date();

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
            photoUrl: user.photoURL
        }

        fetch("https://hello-talk-webserver.vercel.app/addapost", {
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
                    'Your questions is posted!',
                    'Possible reponse is near !',
                    'success'
                )
            })

    }

    return (
        <div>
            <div className='flex items-center mt-8 bg-white p-5 justify-center rounded-lg'>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={user?.photoURL} alt="Profile Picture" />
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" name="" id="" className='input input-bordered rounded-full input-primary  ml-2 h-[36px] w-[600px]  bg-[#F0F2F5] px-2' onClick={() => setShowModal(true)} />
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
                                        <button className=" btn btn-ghost rounded-full" onClick={() => setShowModal(false)}>X</button>

                                    </div>
                                    {/*body*/}
                                    <form onSubmit={handlePost}>
                                        <div className="relative p-6 flex-auto ">
                                            <label className="label">
                                                <span className="label-text">Question Title:</span>
                                            </label>
                                            <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full" />
                                            <label className="label">
                                                <span className="label-text"> Questions on details:</span>
                                            </label>
                                            <textarea name='textarea' className="textarea w-[600px] input-bordered " placeholder="Your question"></textarea>

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
    );
};

export default WriteaPost;