import React from 'react';

const Messages = ({ current }) => {
    console.log(current)
    return (
        <div className="py-[15px]">
            {!current ? 
                <>
                    <h2 className="text-center text-bold text-xl">NO CONTACT CHOSEN</h2>
                </> 
                :
                <div>
                    <div key={current?._id} className="pl-2 pointer flex items-center gap-x-[10px] mb-2  border-b-[1px] pb-2">
                        <div className="avatar ">
                            <div className="w-10 rounded-full">
                                <img alt="/" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                        </div>
                        <h2 className="capitalize font-bold text-md text-[#333]">{current?.name}</h2>
                    </div>

                    <div className="text-center">
                        <div className="avatar ">
                            <div className="w-24 rounded-full">
                                <img alt="/" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{current?.name}</h2>
                        <p className="text-sm font-semibold">Oxford Brookes University</p>
                        <p className="font-semibold text-sm">Email: <span className="text-blue-400 font-medium">{current?.email}</span></p>
                    </div>
                </div>
            }
                       
        </div>
    );
};

export default Messages;