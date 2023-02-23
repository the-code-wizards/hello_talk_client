import React, { useEffect, useState } from 'react';
import useSingleUser from '../hooks/useSingleUser'
import useFriends from '../hooks/useFriends';
import Messages from './Messages';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import Loader from '../Shared/Loader';

const ChatSidebar = ({ setCurrent }) => {
    // const [singleUser] = useSingleUser()
    const [friends, loading3] = useFriends()
    const [user, error] = useAuthState(auth);
    // const [current, setCurrent] = useState('');
    const [singleUser, setSingleUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://hello-talk-webserver.vercel.app/profile?email=${user?.email}`)
            .then((res) => {
                setSingleUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [user]);

    // console.log(user)
    return (
        <div className="drawer md:drawer-mobile  md:pt-[4.5rem] pt-[4rem] md:sticky fixed left-0 top-0 ">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="pt-4 bg-[#2D61A0] lg:md:pr-[30px] h-full ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <div className="flex items-center gap-x-[10px] ml-2">
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
                    className="input w-full max-w-sm bg-[#ddd] mt-3 h-9 ml-2" />
                <div>
                    <div className="mt-4">
                        {
                            loading3 || loading ? <Loader /> 
                                : 
                                <>
                                    {friends.length > 0 ?
                                        <>
                                            {friends?.map((user) => {
                                                return (
                                                    <div onClick={() => setCurrent(user)} key={user?._id} className="ml-2 flex items-center gap-x-[10px] mb-2 hover:bg-[#6595cf] active:bg-[#6595cf] focus:bg-[#6595cf] rounded-lg p-[5px] cursor-pointer">
                                                        <div className="avatar ">
                                                            <div className=" w-10 rounded-full bg-green-400 ring-2 ring-gray-50">
                                                                <span className="flex justify-center text-2xl mt-[5px] capitalize font-bold text-[#fff] ">
                                                                    {user?.senderName.slice(0, 2)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <h2 className="capitalize text-semibold text-md text-[#fff]">{user?.senderName}</h2>
                                                    </div>
                                                )
                                            })}
                                        </>
                                        :
                                        <>
                                            <h2 className="text-center">No Friends Found</h2>
                                        </>
                                    }
                                </>
                        }
                        
                    </div>
                </div>
            </div>
            {/* <div className="hidden">
                <Messages current={current} />
        </div> */}
        </div>
    );
};

export default ChatSidebar;