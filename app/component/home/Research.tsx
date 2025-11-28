"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Research() {
    const WhatNew = [
        {
            id: 1,
            image: "https://mitwpu.edu.in/uploads/notificationfile/FDP-img-desk.webp",
            description: "Optimization Methods for Product and System Design"
        },
        {
            id: 2,
            image: "https://mitwpu.edu.in/uploads/notificationfile/Winter-School-2025-desk.webp",

            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
        {
            id: 3,
            image: "https://mitwpu.edu.in/uploads/notificationfile/Endowrement-Des.webp",

            description: "Two days International Conference on Socio-Legal Intricacies of Artificial Intelligence"
        },
        {
            id: 4,
            image: "https://mitwpu.edu.in/uploads/notificationfile/ICSLIAI-thumbnail-1.webp",

            description: "International Conference on Bridging Ancient and Advanced Technology of Nanomaterials"
        },
    ];
    return (<>
        <div className="w-full bg-gray-100 py-20 pt-32 px-4">
            <div className="text-black text-center">
                <h2 className="text-4xl text-center text-black md:text-5xl font-bold hover:text-[#DA3948] pb-8">Research</h2>
                <p className="text-xl font-semibold pb-4">Pushing the frontiers of knowledge to create real-world impact.</p>
                <p className="text-lg md:mx-20 mx-5 text-justify pb-10">MIT-WPU encourages research in practically every domain, and endeavours to develop human knowledge through insight driven investigations, inventions, and understanding to create solutions for critical world problems. Fostering the spirit of curiosity and building world-class research ecosystems.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                    <div>
                        <h3 className="text-4xl text-[#DA3948] font-bold pb-3">5000 +</h3>
                        <p className="font-bold text-lg">RESEARCH <br />PUBLICATIONS</p>
                    </div>
                    <div>
                        <h3 className="text-4xl text-[#DA3948] font-bold pb-3">400 +</h3>
                        <p className="font-bold text-lg">PUBLISHED</p>
                    </div>
                    <div>
                        <h3 className="text-4xl text-[#DA3948] font-bold pb-3">164 +</h3>
                        <p className="font-bold text-lg">GRANTED PATENTS</p>
                    </div>
                </div>
            </div>
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
                            <div className="bg-white  overflow-hidden  transition-shadow duration-300 mb-4 h-96">
                                <img
                                    src={item.image}

                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <p className="text-gray-700 text-lg ">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>)
}