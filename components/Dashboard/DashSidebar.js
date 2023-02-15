import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsChevronDown } from 'react-icons/bs';
import useSingleUser from '../hooks/useSingleUser';

const DashSidebar = () => {
  const [user] = useAuthState(auth);
  const [singleUser] = useSingleUser({});
  console.log(singleUser);
  return (
    <div className="drawer md:drawer-mobile md:pt-[4.5rem] pt-[4rem] md:sticky fixed left-0 top-0 h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="h-full menu p-4 w-64 bg-[#194881] gap-y-2 text-[#fff]">
          {/* <!-- Sidebar content here --> */}
          {singleUser?.role === 'admin' ? (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/myprofile">My Profile</Link>
              </li>
              <li>
                <Link href="/dashboard/general/">General</Link>
              </li>
              {/*--------------- Blogs ----------------*/}
              <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
                  Blogs
                  <div className="ml-2">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
                  <li>
                    <Link href="/dashboard/addblog">Add Blog</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/allblogs">All Blogs</Link>
                  </li>
                </div>
              </div>
              {/*---------------- Courses -----------------*/}
              <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
                  Courses
                  <div className="ml-2">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
                  <li>
                    <Link href="/dashboard/addcourse">Add Course</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/allcourses">All Courses</Link>
                  </li>
                </div>
              </div>
              {/*------------ Teachers ----------------*/}
              <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
                  Teachers
                  <div className="ml-2">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
                  <li>
                    <Link href="/dashboard/addteacher">Add Teacher</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/allteachers">All Teachers</Link>
                  </li>
                </div>
              </div>
              <li>
                <Link href="/dashboard/allusers">All Users</Link>
              </li>
              <li>
                <Link href="/dashboard/admins">Admins</Link>
              </li>
              <li>
                <Link href="/dashboard/coursesbought">Courses Bought</Link>
              </li>
            </>
          ) : (
            <>
              {singleUser?.role === 'teacher' ? (
                <li></li>
              ) : (
                <>
                  {/* <li>
                    <Link href="/dashboard/userdashboard">Dashboard</Link>
                  </li> */}
                  <li>
                    <Link href="/dashboard/myprofile">My Profile</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/mycourses">My Courses</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/premiumblog">Premium Blog</Link>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;

// Back Up Code
// <div className="drawer drawer-mobile pt-[4.5rem] sticky">
//   <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-side">
//     <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
//     <ul className="h-full menu p-4 w-64 bg-[#194881] gap-y-2 text-[#fff]">
//       {/* <!-- Sidebar content here --> */}
//       {user && (
//         <>
//           <li>
//             <Link href="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link href="/dashboard/myprofile">My Profile</Link>
//           </li>
//           {/*--------------- Blogs ----------------*/}
//           <div className="collapse">
//             <input type="checkbox" className="peer" />
//             <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
//               Blogs
//               <div className="ml-2">
//                 <BsChevronDown />
//               </div>
//             </div>
//             <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
//               <li>
//                 <Link href="/dashboard/addblog">Add Blog</Link>
//               </li>
//               <li>
//                 <Link href="/dashboard/allblogs">All Blogs</Link>
//               </li>
//             </div>
//           </div>
//           {/*---------------- Courses -----------------*/}
//           <div className="collapse">
//             <input type="checkbox" className="peer" />
//             <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
//               Courses
//               <div className="ml-2">
//                 <BsChevronDown />
//               </div>
//             </div>
//             <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
//               <li>
//                 <Link href="/dashboard/addcourse">Add Course</Link>
//               </li>
//               <li>
//                 <Link href="/dashboard/allcourses">All Courses</Link>
//               </li>
//             </div>
//           </div>
//           {/*------------ Teachers ----------------*/}
//           <div className="collapse">
//             <input type="checkbox" className="peer" />
//             <div className="collapse-title flex items-center bg-[#194881] text-primary-content peer-checked:bg-[#194881]peer-checked:text-secondary-content">
//               Teachers
//               <div className="ml-2">
//                 <BsChevronDown />
//               </div>
//             </div>
//             <div className="collapse-content bg-[#194881] text-primary-content peer-checked:bg-[#194881] peer-checked:text-secondary-content">
//               <li>
//                 <Link href="/dashboard/addteacher">Add Teacher</Link>
//               </li>
//               <li>
//                 <Link href="/dashboard/allteachers">All Teachers</Link>
//               </li>
//             </div>
//           </div>
//           <li>
//             <Link href="/dashboard/allusers">All Users</Link>
//           </li>
//           <li>
//             <Link href="/dashboard/admins">Admins</Link>
//           </li>
//           <li>
//             <Link href="/dashboard/coursesbought">Courses Bought</Link>
//           </li>
//         </>
//       )}
//     </ul>
//   </div>
// </div>
