"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhatNew() {
    const WhatNew = [
        {
            id: 1,
            image: "https://mitwpu.edu.in/uploads/notificationfile/FDP-img-desk.webp",
            title: "13/02/2026",
            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
        {
            id: 2,
            image: "https://mitwpu.edu.in/uploads/notificationfile/Winter-School-2025-desk.webp",
            title: "13/02/2026",
            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
        {
            id: 3,
            image: "https://mitwpu.edu.in/uploads/notificationfile/Endowrement-Des.webp",
            title: "13/02/2026",
            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
        {
            id: 4,
            image: "https://mitwpu.edu.in/uploads/notificationfile/ICSLIAI-thumbnail-1.webp",
            title: "13/02/2026",
            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
    ];

    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <h2 className="text-4xl text-center text-black md:text-5xl font-bold hover:text-[#DA3948]">
                What's New
            </h2>

            <div className="mt-10 px-5 md:px-10">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    loop={true}
                    //pagination={{ clickable: true }}
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
                    {WhatNew.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-gray-100 shadow-xl  overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <p className="text-sm font-semibold text-black mb-2">{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
