import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState, useMemo } from 'react';

const JoditEditor = dynamic(() => {
  if (typeof window !== 'undefined') {
    // Load jodit-react on the client-side
    return import('jodit-react');
  }
  return null;
}, { ssr: false });

const PrivacyPolicy = () => {

  const editor = useRef(null);
  const [privacyContent, setPrivacyContent] = useState('');
  const [termsContent, setTermsContent] = useState('');

  const handleSubmitPrivacy = () => {
    const privacyBody = {
      content: privacyContent,
    };
    const confirm = window.confirm('Are you sure want to add privacy?');
    if (confirm) {
      fetch(`https://hello-talk-webserver.vercel.app/addprivacy`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(privacyBody),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert('content added of privacy & policy');
          }
        });
    }
  };

  const handleSubmitTerms = () => {
    const termsBody = {
      content: termsContent,
    };
    const confirm = window.confirm('Are you sure want to add terms?');
    if (confirm) {
      fetch(`https://hello-talk-webserver.vercel.app/addterms`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(termsBody),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert('content added of terms & condition');
          }
        });
    }
  };

  return (
    <div className="py-24 w-[90%] mx-auto  ">
      <div className="bg-[#1A4982] py-3 rounded-xl">
        <h2 className="py-3 capitalize text-lg text-white text-center">Add Privacy and Policy</h2>
        <div className="">
          <JoditEditor
            ref={editor}
            value={privacyContent}
            onChange={(newContent) => setPrivacyContent(newContent)}
          ></JoditEditor>
        </div>
        <div className="flex justify-end mt-2 mr-2">
          <button
            onClick={handleSubmitPrivacy}
            className="text-[#1A4982] hover:bg-[#dcecff] uppercase px-6 py-2 rounded-md bg-white"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="divide-x-2"></div>

      <div className="mt-12 bg-[#1A4982] py-3 rounded-xl">
        <h2 className="py-3 capitalize text-lg text-white text-center">Add terms and condition</h2>
        <div className="">
          <JoditEditor
            ref={editor}
            value={termsContent}
            onChange={(newContent) => setTermsContent(newContent)}
          ></JoditEditor>
        </div>

        <div className="flex justify-end mt-2 mr-2">
          <button
            onClick={handleSubmitTerms}
            className="text-[#1A4982] hover:bg-[#dcecff] uppercase px-6 py-2 rounded-md bg-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;