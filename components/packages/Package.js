import React from 'react';
import SingleCard from './SingleCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const Package = () => {
    const AllPackage = [
        {
            id: 1,
            title:"html 1",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
        {
            id: 2,
            title:"html 2",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
        {
            id: 3,
            title:"html 3",
            picture: "https://img.freepik.com/premium-photo/natural-landscape-botanical-garden_35355-5948.jpg",
            details: "You can insert any image in your web page by using <img> tag. Following is the simple syntax to use this tag. The <img> tag is an empty tag, which means that, it can contain only list of attributes and it has no closing tag.",

        },
    ]
    return (
      <Swiper>
          <div className='max-w-[1240px] mx-auto py-20'>
            {/* Ekhane card gulo banaben */}
           <div className='grid grid-cols-3 gap-10'>
           {
                AllPackage.map(packages => <SingleCard
                key={packages.id}
                packages={packages}
                ></SingleCard> )
            }
           </div>

        </div>
      </Swiper>
    );
};

export default Package;