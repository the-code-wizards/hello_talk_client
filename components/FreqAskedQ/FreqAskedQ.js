import Head from "next/head";
import React, { useState } from "react";

const fakeQueData = [
  {
    question: "What are faster results? When will my results be available?",
    answer:
      "When purchased, a test with faster results will reduce the turnaround time from 48 hours to 12 hours, though tests will still receive the same level of human proctoring and AI scoring as standard tests.",
  },
  {
    question: "When and where can I take the HelloTalk Test?",
    answer:
      "One of the advantages of the HelloTalk Test is that you can choose your own testing environment and testing time. There are a few general guidelines to help you consider where and when to take the test.",
  },
  {
    question:
      "Can I memorize answers from other sources to use for my writing responses?",
    answer:
      "Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.",
  },
  {
    question:
      "I received a message that my session timed out. What does this mean and what should I do?",
    answer:
      "This message appears when test-takers have a slow internet connection that leads to long question load times. When this happens, it is possible to reach the session time limit without completing enough questions to obtain an accurate score. In this case, you must retake the test, ideally with a stronger internet connection, and complete enough questions within the allotted time. If you must retake the test for this reason, you do not have to purchase the test again. If you are having trouble starting the test again, you may contact support.",
  },
  {
    question:
      "How can I make sure I properly answer the graded speaking questions?",
    answer:
      "Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.",
  },
  {
    question:
      "How many chances do I get to take the HelloTalk English Test when I purchase it?",
    answer:
      "This website supports the latest versions of Chrome, Firefox, and Safari. We recommend using a desktop or laptop computer with a stable internet connection.",
  },
  {
    question:
      "Can I purchase a HelloTalk English Test coupon from a third-party seller?",
    answer:
      "No. Coupons sold by third parties online are not official and will not work for the HelloTalk English Test. We cannot issue refunds for coupons purchased through third parties.",
  },
  {
    question: "How can I change my email address?",
    answer:
      "You can change your HelloTalk English Test account's email address using this settings page.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "You may follow this link to reset your password. Once you enter your email address, you will receive an email with instructions for resetting your password.",
  },
  {
    question: "I have a question not included here. Who should I ask?",
    answer:
      "If you have any additional questions, please contact support.We also recommend checking our test readiness materials.",
  },
];

const FreqAskedQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(fakeQueData);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = fakeQueData.filter((faq) =>
      faq.question.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredFAQs(filteredData);
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <>
      <Head>
        <title>HelloTalk - FAQ</title>
      </Head>
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">
        <h1 className="my-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="relative mb-10 w-1/2 rounded-md shadow-sm text-center">
          <input
            type="search"
            className="form-input px-10 py-3 block w-full transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 rounded-xl focus:outline-none focus:shadow-outline-blue focus:border-[#61B800]  focus:z-10 text-xl leading-5"
            placeholder="Type Your Questions Here"
            onChange={handleSearch}
            value={searchTerm}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 pr-3 flex items-center px-2 text-gray-500"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="accordion md:mx-32 mx-3 sm:mx-32">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="shadow-md mb-2 collapse collapse-arrow border transition ease-in-out delay-150 hover:-translate-y-1 rounded-box"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium text-[#000]">
                {faq.question}
              </div>
              <div className="collapse-content text-[#333]">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreqAskedQ;
