import React from 'react';
import LeaderBoardCard from '../../components/Learn/LeaderBoardCard';
import LevelBlocks from '../../components/Learn/LevelBlocks';
import GemCollectionCard from '../../components/Learn/GemCollectionCard';
import Sidebar from '../../components/Learn/Sidebar';
import LearnNav from '../../components/Learn/LearnNav';
import BottomNav from '../../components/Learn/BottomNav';

const index = () => {
    return (
        <div >
            <LearnNav/>
            <div className='pt-[6rem] grid lg:md:grid-cols-[250px_minmax(650px,_1fr)_300px]'>
                <div className="lg:md:block hidden">
                    <Sidebar />
             </div>
                <LevelBlocks />
                <div>
                    <LeaderBoardCard />
                    <GemCollectionCard />
                </div>
            </div>
            <div className="lg:md:hidden block">
                <BottomNav/>
            </div>
       </div>
    );
};

export default index;