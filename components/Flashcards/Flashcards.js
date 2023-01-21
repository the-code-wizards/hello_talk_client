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
      question: 'When and where can I take the HelloTalk Test?',
      answer:
        'One of the advantages of the HelloTalk Test is that you can choose your own testing environment and testing time. There are a few general guidelines to help you consider where and when to take the test.',
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
      question: 'How many chances do I get to take the HelloTalk English Test when I purchase it?',
      answer:
        'This website supports the latest versions of Chrome, Firefox, and Safari. We recommend using a desktop or laptop computer with a stable internet connection.',
    },
    {
      question: 'Can I purchase a HelloTalk English Test coupon from a third-party seller?',
      answer:
        'No. Coupons sold by third parties online are not official and will not work for the HelloTalk English Test. We cannot issue refunds for coupons purchased through third parties.',
    },
    {
      question: 'How can I change my email address?',
      answer:
        "You can change your HelloTalk English Test account's email address using this settings page.",
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
      {/* <Navbar /> */}
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