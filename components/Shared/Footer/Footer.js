import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url("back.svg")` }}>
            <div className='max-w-[1240px] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center py-20'>
                    <h1 className='font-featherBold text-white text-xl lg:md:mr-4 lg:md:text-3xl'>Learn a language with Hello Talk.</h1>
                    <button className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[60%] lg:md:mx-0 mx-auto lg:md:w-[15%] hover:bg-[#171d13] ml-5">Get Started</button>
                </div>
                <footer className="footer p-10 text-neutral-content "  >
                    <div>
                        <span className=" footer-title">Services</span>
                        <a className=" link link-hover">Branding</a>
                        <a className=" link link-hover">Design</a>
                        <a className=" link link-hover">Marketing</a>
                        <a className=" link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className=" footer-title">Company</span>
                        <a className=" link link-hover">About us</a>
                        <a className=" link link-hover">Contact</a>
                        <a className=" link link-hover">Jobs</a>
                        <a className=" link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className=" footer-title">Legal</span>
                        <a className=" link link-hover">Terms of use</a>
                        <a className=" link link-hover">Privacy policy</a>
                        <a className=" link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;