import React from 'react';
import { SiGooglemeet } from "react-icons/si";
import { HiStatusOnline } from "react-icons/hi";

const HelpSupportCard = ({lives}) => {
    return (
        <div>
            <div className="font-featherBold rounded-xl bg-[#d7e9ff] p-3 md:p-5  shadow-xl">
            <h2 className='text-xl text-[#2D609F] flex items-center gap-x-3'>{lives.title} <HiStatusOnline className='text-red-600 animate-ping'></HiStatusOnline></h2> 
            <p className='text-sm'>{lives?.details}</p>

            <div className='mt-4 flex gap-3'>
            <div className="avatar">
                <div className="w-10 rounded">
                    <img src={lives?.teacher_photoURL} alt="teacher-img" />
                </div>
            </div>
            <div className=''>
                <h4>Teaher: <span className='text-[#2D609F]'>{lives.teacher_name}</span></h4>
                <h3 className='text-sm'>Category: {lives?.category}</h3>
            </div>
            </div>
<div className="flex justify-end mt-3">
      <a href={lives?.meetLink} target='_blank' rel="noopener noreferrer">
          <button className="font-featherBold px-5 py-2 rounded-lg text-lg items-center  bg-white text-[#2D609F] flex gap-3 uppercase duration-200 shadow-lg hover:shadow-none"><SiGooglemeet></SiGooglemeet>Join meet</button>
      </a>
</div>
</div>
        </div>
    );
};

export default HelpSupportCard;