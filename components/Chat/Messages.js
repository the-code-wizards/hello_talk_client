import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import useSingleUser from '../hooks/useSingleUser';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const Messages = ({ current }) => {
    const [singleUser] = useSingleUser()
    const [messages, setMessages] = useState();
    const [token, setToken] = useState()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();


    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])
    const { data: messagesData = [], refetch, isLoading } = useQuery({
        queryKey: ["messagesData", current?._id, singleUser?._id],
        queryFn: async () => {
            const res = await fetch(`https://hello-talk-webserver.vercel.app/get-messages/${current?._id}/${singleUser?._id}`);
            const data = await res.json();
            console.log(data)
            if (isLoading) {
                return <Loader/>
            }
            if (data.length > 0) {
                setMessages(data)
            }
            return data;
        }
    })
    console.log(messagesData)
    const sendMsg = async (data) => {
        const form = data.target;
        const msgData = {
            sender: singleUser?.name,
            senderId: singleUser?._id,
            recId: current?._id,
            msg: data?.msg
        }
        try {
            const response = await axios.post('https://hello-talk-webserver.vercel.app/send-message', msgData
                , {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            if (response?.status === 200) {
                console.log(response)
                refetch()
                reset()
            }
        } catch (err) {
            console.error(err);
        }
        console.log(msgData)
    }

    console.log(messages)
    return (
        <div className="py-[15px] md:pt-[5rem] pt-[5rem]">
            {!current ?
                <>
                    <h2 className="text-center text-bold text-xl mt-4">NO CONTACT CHOSEN</h2>
                </>
                :
                <div>
                    <div key={current?._id} className="pl-2 pointer flex items-center gap-x-[10px] mb-2  border-b-[2px] mt-[-8px] bg-[#ddd] py-2 fixed w-full shadow-md " style={{ zIndex: 1 }}>
                        <div className="avatar ">
                            <div className="w-10 rounded-full">
                                <img alt="/" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                        </div>
                        <h2 className="capitalize font-bold text-md text-[#333]">{current?.senderName}</h2>
                    </div>

                    <div className="text-center z-[-1]">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img alt="/" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{current?.senderName}</h2>
                        <p className="text-sm font-semibold">Oxford Brookes University</p>
                        <p className="font-semibold text-sm">Email: <span className="text-blue-400 font-medium">{current?.senderEmail}</span></p>
                    </div>

                    <div>
                        {messagesData && messagesData.length > 0 ? messagesData.map(msg => (
                            msg?.senderId === singleUser?._id ?
                                <div key={msg?._id} className="chat chat-end mr-2">
                                    <div className="text-blue-400 chat-bubble">{msg?.msg}</div>
                                </div>
                                :
                                <div key={msg?._id} className="chat chat-start ml-2">
                                    <div className="chat-bubble">{msg?.msg}</div>
                                </div>
                        )) : <></>}
                        <div className="mx-2 flex items-center fixed w-[76%] bottom-0 mb-4">
                            <form className="mx-2 flex items-center fixed w-[76%] bottom-0 mb-4"
                                onSubmit={handleSubmit(sendMsg)}>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="mt-2 input input-bordered w-full max-w-full bg-[#ddd]"
                                    {...register("msg")}
                                />
                                <button
                                    type="submit" >
                                    <AiOutlineSend className="text-2xl cursor-pointer" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Messages;