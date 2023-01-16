import Link from 'next/link';
import React from 'react';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

const SingleFlashCard = ({ FlashCard }) => {
  const { question, answer } = FlashCard;

  return (
    <div className="lg:md:px-10 px-8">
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
        {fakeRevData?.map((data) => {
          return (
            <div key={data?.id}>
              <SwiperSlide>
                <div className="card shadow-md py-4 border-inherit ">
                  {/* <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full ring ring-[#61E002] ring-offset-base-100 ring-offset-2">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div> */}
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#333]">{question}</h2>
                    <p className="italic">{`"${answer}"`}</p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SingleFlashCard;
