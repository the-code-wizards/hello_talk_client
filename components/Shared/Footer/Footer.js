import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Footer = () => {
  const [user] = useAuthState(auth);
  const getStarted = () => {
    if (!user) {
      window.location.href = '/signin';
    } else {
      window.location.href = '/learn';
    }
  };
  return (
    <div style={{ backgroundImage: `url("back.svg")` }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center py-20">
          <h1 className="font-featherBold text-white text-xl lg:md:mr-4 lg:md:text-3xl">
            Learn a language with HelloTalk.
          </h1>
          <button
            onClick={() => getStarted()}
            className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[60%] lg:md:mx-0 mx-auto lg:md:w-[15%] hover:bg-[#171d13] ml-5"
          >
            Get Started
          </button>
        </div>
        <footer className="footer p-10 text-neutral-content ">
          <div>
            <span className=" footer-title">Services</span>
            <Link href="/" className=" link link-hover">
              Branding
            </Link>
            <Link href="/" className=" link link-hover">
              Design
            </Link>
            <Link href="/" className=" link link-hover">
              Marketing
            </Link>
            <Link href="/" className=" link link-hover">
              Advertisement
            </Link>
          </div>
          <div>
            <span href="/" className=" footer-title">
              Company
            </span>
            <Link href="/ourteam" className=" link link-hover">
              About us
            </Link>
            <Link href="/contact" className=" link link-hover">
              Contact
            </Link>
            <Link href="/" className=" link link-hover">
              Jobs
            </Link>
            <Link href="/" className=" link link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <span className=" footer-title">Legal</span>
            <Link href="/terms" className=" link link-hover">
              Terms of use
            </Link>
            <Link href="/privacy" className=" link link-hover">
              Privacy policy
            </Link>
            <Link href="/" className=" link link-hover">
              Cookie policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
