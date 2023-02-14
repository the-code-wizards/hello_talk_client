import Head from 'next/head';
import React, { useState } from 'react';
import ChatSidebar from '../../components/Chat/ChatSidebar';
import Messages from '../../components/Chat/Messages';
import Navbar from '../../components/Shared/Navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Message = () => {
    const [user, error] = useAuthState(auth);
    const [current, setCurrent] = useState('')
    if(!user){
        window.location.href = '/signin'
    }
    return (
        <div>
            <Head>
                <title>HelloTalk - Messages</title>
            </Head>
            <Navbar />
            <div className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
                    <ChatSidebar setCurrent={setCurrent} />
                    <Messages current={current} />
            </div>
        </div>
    );
};

export default Message;