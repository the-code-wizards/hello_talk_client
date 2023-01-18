import React from 'react';
import { RiVipDiamondLine } from 'react-icons/ri';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';

const GemCollectionCard = () => {
    return (
        <div>
            <div className="lg:md:mt-6 mt-2 lg:md:mb-0 mb-28">
                <div className="card shadow-xl p-2 m-4 border-[2px] border-green-400">
                    <div className="flex justify-center my-2">
                        <RiVipDiamondLine className="text-[#1FC2FF] text-4xl mr-[4px]" />
                        <span className="font-semibold text-3xl text-green-400">50</span>
                    </div>

                    <div className="card-body items-center text-center mt-[-20px]">
                        <h2 className="text-center font-semibold text-lg w-[100%] ">Total Gems of the week</h2>
                        <div className="flex mt-4 items-center">
                            <h2 className="text-[13px] text-[#333] font-semibold mr-[5px]">Performance: </h2>
                            <div className="flex gap-x-[4px] text-yellow-400 text-2xl font-bold"><CiFaceFrown /><CiFaceMeh /><CiFaceSmile /></div>
                        </div>
                        
                        <div className="card-actions">
                            <button className="border-[#1FC2FF] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[100%] rounded-xl text-[#1FC2FF] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] px-4">Past Performance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GemCollectionCard