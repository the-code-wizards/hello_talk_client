import Head from 'next/head';
import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import LearnNav from '../../components/Learn/LearnNav';
import Sidebar from '../../components/Learn/Sidebar';

const index = () => {
  return (
    <div>
      <Head>
        <title>Hello Talk - Learn</title>
      </Head>
      <LearnNav />
      <div className="grid grid-cols-[250px_minmax(650px,_1fr)_300px]">
        <Sidebar />
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default index;
