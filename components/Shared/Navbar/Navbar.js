import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Lottie from 'lottie-react';
import gems from '../../../resources/lottieJson/gem.json';
import Cookies from 'js-cookie';
import useSingleUser from '../../hooks/useSingleUser';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const [user, error] = useAuthState(auth);
  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('linear-gradient(to right,  rgb(25, 72, 129), rgb(63 121 193),#a855f7)');
  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 1)');
  const [textColor, setTextColor] = useState('white');
  const [headerText, setHeaderText] = useState('HelloTalk');

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/profile?email=${user?.email}`)
      .then((res) => {
        // console.log(res);
        setSingleUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [user?.email, singleUser, user]);

  const logout = () => {
    signOut(auth);
    Cookies.set('loggedin', 'false');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    router.push('/');
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (router.pathname === '/' || router.pathname === '/community') {
        if (window.scrollY >= 150) {
          setColor('linear-gradient(to right,  rgb(25, 72, 129), rgb(63 121 193),#a855f7)');
          setBackgroundColor('rgba(0, 0, 0, 0)');
          setTextColor('#ffffff');
        } else {
          setColor('#235490');
          setBackgroundColor('rgba(255, 255, 255, .01)');
          setTextColor('#fff');
        }
      } else {
        setColor('linear-gradient(to right,  rgb(25, 72, 129), rgb(63 121 193),#a855f7)');
        setBackgroundColor('rgba(255, 255, 255, 1)');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [router.pathname]);

  return (
    <nav className="relative z-40">
      <div
        style={{ background: color, backgroundColor: backgroundColor }}
        className="lg:md:px-10 px-0 shadow-2xl navbar mx-auto fixed py-0  left-0 top-0 w-full ease-out duration-300"
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              style={{ color: `${textColor}` }}
              tabIndex={0}
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="font-featherBold menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-200 rounded-box w-52 "
            >
              <li>
                <Link href="/contact">Profile</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/learn">Learn</Link>
              </li>
              <li>
                <Link href="/ourteam">Team</Link>
              </li>
              <li>
                <Link href="/ourteachers">Teachers</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/helpsupport">Help & Support</Link>
                  </li>
                  <li>
                    <Link href="/messages">Messages</Link>
                  </li>
                  <li>
                    <Link href="/friendrequest">Friend Requests</Link>
                  </li>
                  <li>
                    {' '}
                    <button
                      className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002] lg:md:w-full w-[100px] lg:md:mx-0 mx-auto text-center"
                      onClick={logout}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  {' '}
                  <Link
                    className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                    href="/signin"
                  >
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link href="/" className="flex text-2xl items-center">
            {/* <img src="Logo2.png" alt="/" /> */}
            <Image
              // Absolute URL
              src='https://i.ibb.co/dKTz2fv/Logo2.png'
              alt='User profile picture'
              width={50}
              height={50}
            />
            <p className="ml-2 w-full normal-case text-xl lg:text-2xl text-white font-featherBold">
              {headerText}
            </p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex w-[100%]">
          <ul
            style={{ color: `${textColor}` }}
            className="font-featherBold menu menu-horizontal px-1  text-[16px]"
          >
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            {
              user ?
                <li>
                  <Link href="/learn">Learn</Link>
                </li>
                :
                <li>
                  <Link href="/signin">Learn</Link>
                </li>
            }
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/ourteam">Team</Link>
            </li>
            <li>
              <Link href="/ourteachers">Teachers</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            {!user && (
              <li>
                <Link
                  style={{ color: `${textColor}` }}
                  className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl  font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                  href="/signin"
                >
                  Log In
                </Link>
              </li>
            )}

            {!user ? (
              <></>
            ) : (
              <>
                <li>
                  <div className="w-[95px] flex gap-0">
                    <Lottie animationData={gems} loop={true} />
                    <p className="text-[17px] font-bold">{singleUser && singleUser?.gems}</p>
                  </div>
                </li>
                <li>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full bg-green-400 ring-2 ring-gray-50">
                        {singleUser?.photoURL ? (
                          <img src={singleUser?.photoURL} />
                        ) : (
                          <span className="flex justify-center mt-[15px] text-[1.2rem]">
                            {user?.displayName.slice(0, 2)}
                          </span>
                        )}
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-[250%] p-2 shadow bg-green-200 rounded-box w-52 font-bold text-[#333]"
                    >
                      {user && singleUser?.role === 'admin' ? (
                        <>
                          <li>
                            <Link href="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link href="/helpsupport">Help & Support</Link>
                          </li>
                          <li>
                            <Link href="/messages">Messages</Link>
                          </li>
                          <li>
                            <Link href="/friendrequest">Friend Requests</Link>
                          </li>
                          <li>
                            {' '}
                            <button
                              className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002] lg:md:w-full w-[100px] lg:md:mx-0 mx-auto"
                              onClick={logout}
                            >
                              Log Out
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link href="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link href="/helpsupport">Help & Support</Link>
                          </li>
                          <li>
                            <Link href="/messages">Messages</Link>
                          </li>
                          <li>
                            <Link href="/friendrequest">Friend Requests</Link>
                          </li>
                          <li>
                            {' '}
                            <button
                              className="mt-4 bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002] lg:md:w-full w-[100px] lg:md:mx-0 mx-auto text-center"
                              onClick={logout}
                            >
                              Log Out
                            </button>
                          </li>
                        </>
                      )}

                      {!user ? (
                        <li>
                          {' '}
                          <Link
                            className=" bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[8px] px-5 rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] hover:bg-[#61E002]"
                            href="/signin"
                          >
                            Log In
                          </Link>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;