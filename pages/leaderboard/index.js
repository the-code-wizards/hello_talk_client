import Head from 'next/head';
import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Sidebar from '../../components/Learn/Sidebar';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
  return (
    <div>
      <Head>
        <title>HelloTalk - Leaderboard</title>
      </Head>
      <Navbar />
      <div className="pt-[6rem] grid grid-cols-[250px_minmax(950px,_1fr)] gap-x-[15px]">
        <Sidebar />
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default index;
