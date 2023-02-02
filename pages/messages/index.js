import Head from 'next/head';
import React from 'react';
import ChatSidebar from '../../components/Chat/ChatSidebar';
import Messages from '../../components/Chat/Messages';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Head>
                <title>HelloTalk - Messages</title>
            </Head>
            <Navbar />
            <div className="pt-[4.4rem] ">
                <div className="lg:md:block hidden">
                    <ChatSidebar/>
                </div>
                {/* <div>
                    <Messages />
                </div> */}
                <div>
                </div>
            </div>
        </div>
    );
};

export default index;