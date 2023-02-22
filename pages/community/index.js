import Head from 'next/head';
import React from 'react';
import Community from '../../components/CommunityPage/Community';

const index = () => {
    return (
        <div>
            <Head>
                <title>HelloTalk - Community</title>
            </Head>
            <Community></Community>
        </div>
    );
};

export default index;