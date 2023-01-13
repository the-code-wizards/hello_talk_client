import React from 'react';

const SendEmailCard = () => {
    return (
        <div>
            <div className="card max-w-[800px] border border-[#61B800] bg-base-100 shadow-xl mx-auto text-[#3C3C3C] my-10">
                <div className="card-body ">
                    <h2 className="text-center font-featherBold text-3xl">Wanna Get Blog Updates?</h2>
                    <h3 className='text-xl font-bold font-featherBold text-center my-3'>LEAVE YOUR EMAIL AND WE'LL DO THE REST?</h3>

                    <div className='flex justify-center my-4'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[600px] text-center" />
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[50%] hover:bg-[#61E002]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendEmailCard;