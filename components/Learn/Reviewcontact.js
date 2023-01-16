import React from 'react';

const Reviewcontact = () => {
    return (
        <div>
            <div className="mt-4">
                <textarea className="textarea textarea-bordered bg-[#fff]" placeholder="leave us a review"></textarea>
                <button className="border-[#1FC2FF] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[100%] rounded-xl text-[#1FC2FF] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] px-4">Submit</button>
            </div>
        </div>
    );
};

export default Reviewcontact;