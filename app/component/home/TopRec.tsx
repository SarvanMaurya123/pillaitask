'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TopRec() {
    const companyImage = [
        { id: 1, image: "https://mitwpu.edu.in/uploads/logo/Deloitte.webp" },
        { id: 2, image: "https://mitwpu.edu.in/uploads/logo/HILTI.webp" },
        { id: 3, image: "https://mitwpu.edu.in/uploads/logo/amazon.webp" },
        { id: 4, image: "https://mitwpu.edu.in/uploads/logo/HCL.webp" },
        { id: 5, image: "https://mitwpu.edu.in/uploads/logo/Infosys.webp" },
        { id: 6, image: "https://mitwpu.edu.in/uploads/logo/Deloitte.webp" },
        { id: 7, image: "https://mitwpu.edu.in/uploads/logo/HILTI.webp" },
        { id: 8, image: "https://mitwpu.edu.in/uploads/logo/amazon.webp" },
        { id: 9, image: "https://mitwpu.edu.in/uploads/logo/HCL.webp" },
        { id: 10, image: "https://mitwpu.edu.in/uploads/logo/Infosys.webp" }
    ];

    return (
        <>
            <div className="bg-white pt-30">
                <div className="text-center">
                    <button
                        type="button"
                        className="bg-[#EE7832] hover:bg-[#4599A4] cursor-pointer py-3 px-14 text-2xl"
                    >
                        Top Recruiters
                    </button>
                </div>

                <div className=" px-5 md:px-10">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            640: { slidesPerView: 3, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 24 },
                            1024: { slidesPerView: 5, spaceBetween: 30 },
                        }}

                    >
                        {companyImage.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex justify-center">
                                    <img
                                        src={item.image}
                                        alt="Company Logo"
                                        className="w-32 h-32 object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
