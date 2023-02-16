import React from 'react';
import Community from '../../components/CommunityPage/Community';
import Head from "next/head";
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