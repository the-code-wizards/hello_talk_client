import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://hello-talk-webserver.vercel.app/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        // console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // console.log(reviews);
  return (
    <div className="lg:md:sm:px-15 px-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews?.map((data) => {
          return (
            <div key={data?._id}>
              <SwiperSlide>
                <div className="card shadow-2xl my-10 py-4 border-inherit w-full lg:md:mx-[5%]">
                  <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full my-3 bg-green-400 ">
                      {data?.photoURL ? (
                        <img src={data?.photoURL} />
                        ) : (
                          <span className="flex uppercase justify-center items-center mt-[2rem] text-[#fff] text-3xl">
                            {/* {data?.name.slice(0, 2)} */}
                            {/* Uporer ta original  code  api problem er jonno slice bad dichi*/}
                            {data?.name}
                          </span>
                        )}
                    </div>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#333]">{data?.name}</h2>
                    <p className="italic">{`"${data?.comment}"`}</p>
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

export default Feedback;
