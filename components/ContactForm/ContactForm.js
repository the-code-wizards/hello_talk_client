import React from 'react';
import Lottie from "lottie-react";
import contactGif from '../../resources/lottieJson/contact.json'
import CustomButton from '../CustomDesign/CustomButton/CustomButton';


const ContactForm = () => {
    return (
        <>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800 py-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-[#00E019] leading-tight lg:text-5xl">Contact Us</h2>
                        <div className="text-gray-600">Feel free to send us any feedback</div>
                    </div>
                    <div className='w-full'>
                        <Lottie animationData={contactGif} loop={true}></Lottie>
                    </div>
                </div>
                <form action="https://formsubmit.co/afnanferdousi550@gmail.com" method="POST" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" name='email' type="email" className="w-full p-3 rounded bg-gray-100" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded bg-gray-100" spellcheck="false"></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-full  hover:bg-[#61E002]">Send Message</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default ContactForm;