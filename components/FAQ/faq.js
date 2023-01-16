import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const FAQs = [
  {
    question: "What are faster results? When will my results be available?",
    answer:
      "When purchased, a test with faster results will reduce the turnaround time from 48 hours to 12 hours, though tests will still receive the same level of human proctoring and AI scoring as standard tests.",
  },
  {
    question: "When and where can I take the Hello Talk Test?",
    answer:
      "One of the advantages of the Hello Talk Test is that you can choose your own testing environment and testing time. There are a few general guidelines to help you consider where and when to take the test.",
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
      "How many chances do I get to take the Hello Talk English Test when I purchase it?",
    answer:
      "This website supports the latest versions of Chrome, Firefox, and Safari. We recommend using a desktop or laptop computer with a stable internet connection.",
  },
  {
    question:
      "Can I purchase a Hello Talk English Test coupon from a third-party seller?",
    answer:
      "No. Coupons sold by third parties online are not official and will not work for the Hello Talk English Test. We cannot issue refunds for coupons purchased through third parties.",
  },
  {
    question: "How can I change my email address?",
    answer:
      "You can change your Hello Talk English Test account's email address using this settings page.",
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

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(FAQs);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredData = FAQs.filter((faq) =>
      faq.question.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredFAQs(filteredData);
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-20 flex flex-col items-center justify-center">
        <div className="relative mt-10 rounded-md shadow-sm mx-auto text-center">
          <input
            type="search"
            className="form-input py-2 px-3 block w-full leading-5 transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Search"
            onChange={handleSearch}
            value={searchTerm}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 pr-3 flex items-center px-2 text-gray-500"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h1 className="my-20 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="accordion mx-36">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="block p-4 text-lg font-medium leading-5 text-gray-700 focus:outline-none focus:text-gray-900"
                onClick={() => handleClick(index)}
              >
                {faq.question}
              </button>
              {index === activeIndex && (
                <div className="p-4 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
