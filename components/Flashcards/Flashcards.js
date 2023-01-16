import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
import Navbar from '../Shared/Navbar/Navbar';

const Flashcards = () => {
  const FlashCardsData = [
    {
      question: 'What are faster results? When will my results be available?',
      answer:
        'When purchased, a test with faster results will reduce the turnaround time from 48 hours to 12 hours, though tests will still receive the same level of human proctoring and AI scoring as standard tests.',
    },
    {
      question: 'When and where can I take the Hello Talk Test?',
      answer:
        'One of the advantages of the Hello Talk Test is that you can choose your own testing environment and testing time. There are a few general guidelines to help you consider where and when to take the test.',
    },
    {
      question: 'Can I memorize answers from other sources to use for my writing responses?',
      answer:
        'Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.',
    },
    {
      question:
        'I received a message that my session timed out. What does this mean and what should I do?',
      answer:
        'This message appears when test-takers have a slow internet connection that leads to long question load times. When this happens, it is possible to reach the session time limit without completing enough questions to obtain an accurate score.',
    },
    {
      question: 'How can I make sure I properly answer the graded speaking questions?',
      answer:
        'Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.',
    },
    {
      question: 'How many chances do I get to take the Hello Talk English Test when I purchase it?',
      answer:
        'This website supports the latest versions of Chrome, Firefox, and Safari. We recommend using a desktop or laptop computer with a stable internet connection.',
    },
    {
      question: 'Can I purchase a Hello Talk English Test coupon from a third-party seller?',
      answer:
        'No. Coupons sold by third parties online are not official and will not work for the Hello Talk English Test. We cannot issue refunds for coupons purchased through third parties.',
    },
    {
      question: 'How can I change my email address?',
      answer:
        "You can change your Hello Talk English Test account's email address using this settings page.",
    },
    {
      question: 'How can I reset my password?',
      answer:
        'You may follow this link to reset your password. Once you enter your email address, you will receive an email with instructions for resetting your password.',
    },
    {
      question: 'I have a question not included here. Who should I ask?',
      answer:
        'If you have any additional questions, please contact support.We also recommend checking our test readiness materials.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="lg:md:px-10 lg:md:py-52 px-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {FlashCardsData?.map((data, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <div className="card shadow-md py-4 border-inherit ">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-[#333]">{data?.question}</h2>
                      <p className="italic">{`"${data?.answer}"`}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Flashcards;

// import Link from 'next/link';
// import React from 'react';
// import { BsArrowBarLeft } from 'react-icons/bs';
// import SingleCard from '../Courses/SingleCard';
// import Navbar from '../Shared/Navbar/Navbar';
// import SingleFlashCard from './SingleFlashCard';

// const Flashcards = () => {
//   const FlashCards = [
//     {
//       question: 'What are faster results? When will my results be available?',
//       answer:
//         'When purchased, a test with faster results will reduce the turnaround time from 48 hours to 12 hours, though tests will still receive the same level of human proctoring and AI scoring as standard tests.',
//     },
//     {
//       question: 'When and where can I take the Hello Talk Test?',
//       answer:
//         'One of the advantages of the Hello Talk Test is that you can choose your own testing environment and testing time. There are a few general guidelines to help you consider where and when to take the test.',
//     },
//     {
//       question: 'Can I memorize answers from other sources to use for my writing responses?',
//       answer:
//         'Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.',
//     },
//     {
//       question:
//         'I received a message that my session timed out. What does this mean and what should I do?',
//       answer:
//         'This message appears when test-takers have a slow internet connection that leads to long question load times. When this happens, it is possible to reach the session time limit without completing enough questions to obtain an accurate score. In this case, you must retake the test, ideally with a stronger internet connection, and complete enough questions within the allotted time. If you must retake the test for this reason, you do not have to purchase the test again. If you are having trouble starting the test again, you may contact support.',
//     },
//     {
//       question: 'How can I make sure I properly answer the graded speaking questions?',
//       answer:
//         'Try to respond naturally with answers you are coming up with in the moment. Even if you have practiced answers to similar types of questions, your response should directly address the topic and be in your own words.',
//     },
//     {
//       question: 'How many chances do I get to take the Hello Talk English Test when I purchase it?',
//       answer:
//         'This website supports the latest versions of Chrome, Firefox, and Safari. We recommend using a desktop or laptop computer with a stable internet connection.',
//     },
//     {
//       question: 'Can I purchase a Hello Talk English Test coupon from a third-party seller?',
//       answer:
//         'No. Coupons sold by third parties online are not official and will not work for the Hello Talk English Test. We cannot issue refunds for coupons purchased through third parties.',
//     },
//     {
//       question: 'How can I change my email address?',
//       answer:
//         "You can change your Hello Talk English Test account's email address using this settings page.",
//     },
//     {
//       question: 'How can I reset my password?',
//       answer:
//         'You may follow this link to reset your password. Once you enter your email address, you will receive an email with instructions for resetting your password.',
//     },
//     {
//       question: 'I have a question not included here. Who should I ask?',
//       answer:
//         'If you have any additional questions, please contact support.We also recommend checking our test readiness materials.',
//     },
//   ];

//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="md:max-w-[1240px] mx-auto py-20">
//         <div className="flex justify-end pb-2 ">
//           <Link href="/">
//             <button className="btn btn-ghost gap-x-2">
//               <BsArrowBarLeft></BsArrowBarLeft>Back to home
//             </button>
//           </Link>
//         </div>
//         <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-5">
//           {FlashCards?.map((FlashCard, index) => (
//             <SingleFlashCard key={index} FlashCard={FlashCard}></SingleFlashCard>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Flashcards;
