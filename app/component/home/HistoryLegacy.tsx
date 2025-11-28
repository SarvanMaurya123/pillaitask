'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HistoryLegacy() {
    const cards = [
        {
            title: "2004-2014",
            desc: "Empowering Excellence: A Decade of Achievements and Impact",
            img: "https://mitwpu.edu.in/uploads/testimonial/Visionaries_of_Education.webp",
        },
        {
            title: "2015-2019",
            desc: "Expanding Horizons: Global Vision and Commitment to Peace",
            img: "https://mitwpu.edu.in/uploads/testimonial/kaman.webp",
        },
        {
            title: "2021-2025",
            desc: "MIT-WPU: Leading the Future of Education through Innovation and Excellence",
            img: "https://mitwpu.edu.in/uploads/testimonial/BCS.webp",
        },
    ];

    return (
        <div className="relative pt-20 pb-0  bg-[#1d1d1e] text-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Heading with View More button */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
                        History & Legacy
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Rooted in history, committed to shaping tomorrow.
                    </p>

                    {/* View More Button - positioned top right on larger screens */}
                    <button className="absolute top-30 right-0 hidden lg:block bg-[#f4b942] hover:bg-[#f4b942] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg  hover:-translate-y-1">
                        View More
                    </button>

                    {/* View More Button - centered below text on mobile */}
                    <button className="mt-6 lg:hidden bg-[#f4b942] hover:bg-[#f4b942] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                        View More
                    </button>
                </div>

                {/* Slider with enhanced cards */}
                <div className="w-full mx-auto">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="pb-16"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative  overflow-hidden shadow-2xl  transition-all duration-500 ">


                                    <div className="relative overflow-hidden">
                                        <img
                                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl *:"
                                            src={card.img}
                                            alt={card.title}
                                        />

                                    </div>

                                    <div className="relative p-6">
                                        <h5 className="text-2xl font-bold text-[#f4b942] mb-3 group-hover:text-[#f4b942] transition-colors duration-300">
                                            {card.title}
                                        </h5>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            {card.desc}
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Background image with better integration */}
                    <div className="relative w-full h-50 md:h-50 -mt-12  overflow-hidden">
                        <div className="absolute inset-0  top-4 z-20"></div>
                        <img
                            src="https://mitwpu.edu.in/assets/frontend/images/historyBg.webp"
                            alt="Accreditation"
                            className="absolute inset-0 w-full h-96 object-cover object-center"
                        />
                        <div className="absolute inset-0 z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}