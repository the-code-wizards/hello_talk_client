import Head from 'next/head';
import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import LearnNav from '../../components/Learn/LearnNav';

const index = () => {
    return (
        <div>
            <Head>
                <title>Hello Talk - Learn</title>
            </Head>
            <LearnNav />
            <Leaderboard />
        </div>
    );
};

export default index;