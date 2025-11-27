"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const universities = [
    {
        id: 1,
        name: "John Hopkins University",
        logo: "https://mitwpu.edu.in/uploads/logo/John-Hopkins-collaboration-logo.webp"
    },
    {
        id: 2,
        name: "Vrije Universiteit",
        logo: "https://mitwpu.edu.in/uploads/logo/Vrije-Universiteit-collaboration-logo.webp"
    },
    {
        id: 3,
        name: "Macquarie University",
        logo: "https://mitwpu.edu.in/uploads/logo/Macquarie-collaboration-logo.webp"
    },
    {
        id: 4,
        name: "University of Texas",
        logo: "https://mitwpu.edu.in/uploads/logo/John-Hopkins-collaboration-logo.webp"
    },
    {
        id: 5,
        name: "Vrije Universiteit",
        logo: "https://mitwpu.edu.in/uploads/logo/Vrije-Universiteit-collaboration-logo.webp"
    },
    {
        id: 6,
        name: "Deakin University",
        logo: "https://mitwpu.edu.in/uploads/logo/Deakin-collaboration-logo.webp"
    }
];

export default function InternationalCollaborations() {
    return (
        <div className="bg-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="flex flex-col lg:flex-row gap-0 items-stretch ">

                    {/* LEFT FIXED BOX */}
                    <div className="bg-[#DA3948] p-20">
                        <div className="">
                            <h2 className="text-xl  lg:text-2xl font-bold leading-tight mb-4">
                                International<br />Collaborations
                            </h2>

                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="flex-1 min-w-0">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 24 },
                                1024: { slidesPerView: 3, spaceBetween: 24 },
                            }}

                            className="pb-12"
                            style={{ height: '220px' }}
                        >
                            {universities.map((item) => (
                                <SwiperSlide key={item.id} className="h-full">
                                    <div className="bg-white   border-gray-200 border-r-2  flex flex-col items-center justify-between  hover:border-red-300 transition-all group">

                                        {/* Logo Container */}
                                        <div className="w-full flex-1 flex items-center justify-center mb-4">
                                            <div className="w-full  flex items-center justify-center p-2">
                                                <img
                                                    src={item.logo}
                                                    alt={item.name}
                                                    className="max-w-full max-h-full object-contain filter grayscale "
                                                />
                                            </div>
                                        </div>

                                        {/* University Name */}
                                        <div className="w-full pt-4">
                                            <p className="text-gray-900 text-sm font-semibold text-center leading-snug px-2">
                                                {item.name}
                                            </p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
}