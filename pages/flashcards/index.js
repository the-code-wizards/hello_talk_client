import React from 'react';
import Sidebar from '../../components/Learn/Sidebar';
import BottomNav from '../../components/Learn/BottomNav';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Head from 'next/head';
import Flashcards from '../../components/Flashcards/Flashcards';

const index = () => {
    return (
        <div >
            <Head>
                <title>HelloTalk - Flascards</title>
            </Head>
            <Navbar />
            <div className='pt-[6rem] grid lg:md:grid-cols-[250px_minmax(950px,_1fr)]'>
                <div className="lg:md:block hidden">
                    <Sidebar />
                </div>
                <Flashcards />
            </div>
            <div className="lg:md:hidden block">
                <BottomNav />
            </div>
        </div>
    );
};

export default index;