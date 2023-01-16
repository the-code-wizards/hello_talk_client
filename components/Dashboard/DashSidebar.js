import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashSidebar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile pt-[4.5rem]">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="h-full menu p-4  w-64 bg-base-100 gap-y-2 text-[#fff]">
                    {/* <!-- Sidebar content here --> */}
                    {user &&
                        <>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/dashboard/addblog">Add Blog</Link></li>
                            <li><Link href="/dashboard/allblogs">All Blogs</Link></li>
                            <li><Link href="/dashboard/addcourse">Add Course</Link></li>
                            <li><Link href="/dashboard/addoffer">Add Offer</Link></li>
                            <li><Link href="/dashboard/alloffers">All Offers</Link></li>
                            <li><Link href="/dashboard/makeadmin">Make Admin</Link></li>
                            <li><Link href="/dashboard/allusers">All Users</Link></li>
                            <li><Link href="/dashboard/coursesbought">Courses Bought</Link></li>
                            <li><Link href="/dashboard/pkgbought">Pro Package Bought</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default DashSidebar;