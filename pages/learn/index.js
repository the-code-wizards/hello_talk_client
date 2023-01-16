import React from 'react';
import LeaderBoardCard from '../../components/Learn/LeaderBoardCard';
import LevelBlocks from '../../components/Learn/LevelBlocks';
import GemCollectionCard from '../../components/Learn/GemCollectionCard';
import Sidebar from '../../components/Learn/Sidebar';
import LearnNav from '../../components/Learn/LearnNav';

const index = () => {
    return (
        <div >
            <LearnNav/>
            <div className='pt-[6rem] grid grid-cols-[250px_minmax(650px,_1fr)_300px]'>
                <div>
                    <Sidebar />
             </div>
                <LevelBlocks />
                <div>
                    <LeaderBoardCard />
                    <GemCollectionCard />
                </div>
            </div>
       </div>
    );
};

export default index;