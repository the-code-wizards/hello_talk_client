import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Feedback = () => {
    const fakeRevData = [
        {
            id: 1,
            name: "Afnan Ferdousi",
            img: "/",
            review: "Loved the experince so far. They provide authentic and helpful contents to improve our language skill",
            stars: 4
        },
        {
            id: 2,
            name: "Abdullah Al Shaimpn",
            img: "/",
            review: "Loved the experince so far. They provide authentic and helpful contents to improve our language skill",
            stars: 5
        },
        {
            id: 3,
            name: "MD Asadulla Al Galib",
            img: "/",
            review: "Just so so. The website lags a lot, there is a lot of ads that doesn't let me concentrate on the lessons",
            stars: 2
        },
        {
            id: 4,
            name: "Sujoy Paul",
            img: "/",
            review: "They have amazing customer service. I surely will tell all the people I know to use their website!",
            stars: 4
        },
        {
            id: 5,
            name: "Kasib Mohammad Chowdhury",
            img: "/",
            review: "They have amazing customer service. I surely will tell all the people I know to use their website!",
            stars: 4
        },
        {
            id: 6,
            name: "Mosharaf Hossain",
            img: "/",
            review: "Just so so. The website lags a lot, there is a lot of ads that doesn't let me concentrate on the lessons",
            stars: 1
        }
    ]
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
                {
                    fakeRevData?.map((data) => {
                        return (
                            <div key={data?.id} >
                                <SwiperSlide>
                                    <div className="card shadow-md py-4 border-inherit ">
                                        <div className="avatar flex justify-center">
                                            <div className="w-24 rounded-full ring ring-[#61E002] ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#333]">{data?.name}</h2>
                                            <p className="italic">{`"${data?.review}"`}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper >
        </div>
    );
};

export default Feedback;