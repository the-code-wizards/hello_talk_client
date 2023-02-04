import Head from 'next/head';
import React, { useState } from 'react';
import ChatSidebar from '../../components/Chat/ChatSidebar';
import Messages from '../../components/Chat/Messages';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Message = () => {
    const [current, setCurrent]  = useState('')
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