'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function StudentTestimonials() {
    const testimonials = [


        {
            name: "Prajwal Bhagwat",
            feedback: "The practical approach to learning helped me secure a great job right after graduation.",
            img: "https://mitwpu.edu.in/uploads/testimonial/Prajwal-Bhagwat.webp"
        },
        {
            name: "Vaishnavi Dhaytadak",
            feedback: "The practical approach to learning helped me secure a great job right after graduation.",
            img: "https://mitwpu.edu.in/uploads/testimonial/Vaishnavi-Dhaytadak.webp"
        },
        {
            name: "Prajwal Bhagwat",
            feedback: "The practical approach to learning helped me secure a great job right after graduation.",
            img: "https://mitwpu.edu.in/uploads/testimonial/Prajwal-Bhagwat.webp"
        },
        {
            name: "Vaishnavi Dhaytadak",
            feedback: "The practical approach to learning helped me secure a great job right after graduation.",
            img: "https://mitwpu.edu.in/uploads/testimonial/Vaishnavi-Dhaytadak.webp"
        },
        {
            name: "Prajwal Bhagwat",
            feedback: "The practical approach to learning helped me secure a great job right after graduation.",
            img: "https://mitwpu.edu.in/uploads/testimonial/Prajwal-Bhagwat.webp"
        },
    ];
    return (
        <div className="p-10 bg-white text-black text-center  shadow-md">
            <h2 className="text-5xl font-bold mb-4 text-[#DA3948]">Student Testimonials</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Thoughts, takeaways, and testimonials from those who've lived it.
            </p>

            <div className='w-full pt-10'>
                {/* Testimonials content can be added here in the future */}
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    loop={true}
                    //navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-50 p-6 h-full w-full flex items-center justify-between py-5 gap-5 
     border border-gray-300 border-t-4 border-t-[#f4b942] mb-15">

                                <div className='w-56'>
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-40 h-40  mb-4 object-cover"
                                    />
                                </div>
                                <div className="ml-6">
                                    <p className="text-gray-600 text-base text-justify mb-10">{testimonial.feedback}</p>
                                    <h5 className="text-xl font-semibold mb-2">{testimonial.name}</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}