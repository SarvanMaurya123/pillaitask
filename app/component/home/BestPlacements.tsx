'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BestPlacements() {
    const slides = [
        {
            id: 1,
            image: "https://mitwpu.edu.in/uploads/images/Mrutunjay-Patil-placement-banner-003.webp"
        },
        {
            id: 2,
            image: "https://mitwpu.edu.in/uploads/images/Dhairvi-Shah-placement-banner-005.webp"
        },
        {
            id: 3,
            image: "https://mitwpu.edu.in/uploads/images/Mayank-Kumar-placement-banner-004.webp"
        },
    ];

    return (

        <div className="w-full h-screen py-20 bg-white">
            <div className="bg-white text-center">
                <h2 className="text-4xl text-center text-black md:text-5xl font-bold
             hover:text-[#DA3948] pb-6">Best Placements</h2>
                <p className="pb-10 text-2xl text-black">    Top recruiters, unmatched opportunities-your success story begins here.</p>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                //pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                className="w-full h-full"
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Placement Banner"
                            className="w-full h-full "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
