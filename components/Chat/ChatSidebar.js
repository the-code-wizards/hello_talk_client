import React, { useEffect, useState } from 'react';
import useSingleUser from '../hooks/useSingleUser'
import useUsers from '../hooks/useUsers';
import Messages from './Messages';

const ChatSidebar = () => {
    const [singleUser] = useSingleUser()
    const [users] = useUsers()
    const [current, setCurrent] = useState('');
    console.log(singleUser)
    return (
        <div  className="grid lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
            <div className="p-[15px] bg-[#2D61A0]">
            <div className="flex items-center gap-x-[10px]">
                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    </div>
                </div>
                <h2 className="capitalize text-semibold italic text-lg">{singleUser?.name}</h2>
           </div>
            <input
                type="search"
                placeholder="Search name"
                className="input w-full max-w-xs bg-[#ddd] mt-3 h-9" />
            <div>
               <div className="mt-4">
                    {users?.map((user) => {
                        return (
                            <div onClick={() => setCurrent(user)} key={user?._id} className="flex items-center gap-x-[10px] mb-2 hover:bg-[#6595cf] active:bg-[#6595cf] focus:bg-[#6595cf] rounded-lg p-[5px] pointer">
                                <div className="avatar ">
                                    <div className="w-10 rounded-full">
                                        <img alt="/" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                                    </div>
                                </div>
                                <h2 className="capitalize text-semibold text-md text-[#fff]">{user?.name}</h2>
                            </div>
                        )
                    })}
               </div>
            </div>
        </div>
        <div>
                <Messages current={current} />
        </div>
        </div>
    );
};

export default ChatSidebar;