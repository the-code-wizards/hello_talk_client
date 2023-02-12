import React, { useEffect, useRef, useState } from 'react';
// import JoditEditor from 'jodit-react';

const PrivacyPolicy = () => {

    // const editor = useRef(null)
    // const [privacyContent, setPrivacyContent] = useState('')
    // const [termsContent, setTermsContent] = useState('');

    // const handleSubmitPrivacy = () => {
    //     const conform = conform('Are you sure want to add privacy?')

    // }

    return (
        <div className='py-24 w-[88%] mx-auto'>
            <div className='bg-[#1A4982] p-3 rounded-xl'>
            <h2 className='py-3 capitalize text-lg text-white text-center'>Add Privacy and Policy</h2>
            <div className=''>
                {/* <JoditEditor
                    ref={editor}
                    value={privacyContent}
                    onChange={newContent => setPrivacyContent(newContent)}
                ></JoditEditor> */}
            </div>
            {/* <div className='flex justify-end mt-2'>
                <button onClick={handleSubmitPrivacy} className='text-[#1A4982] hover:bg-[#dcecff] uppercase px-6 py-2 rounded-md bg-white'>Submit</button>
            </div> */}
            </div>

            <div className='divide-x-2'></div>

            <div className='mt-12 bg-[#1A4982] p-3 rounded-xl'>
            <h2 className='py-3 capitalize text-lg text-white text-center'>Add terms and condition</h2>
            <div className=''>
                {/* <JoditEditor
                    ref={editor}
                    value={termsContent}
                    onChange={newContent => setTermsContent(newContent)}
                ></JoditEditor> */}
            </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;