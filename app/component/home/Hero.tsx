'use client';

import { Search } from "lucide-react";
import { useState } from "react";
import FloatingSidebar from "./RightSideInfo";
import HistoryLegacy from "./HistoryLegacy";
import StudentTestimonials from "./StudentTestimonials";
import LifeMITWPU from "./LifeMIT-WPU";
import LatestHappenings from "./LatestHappenings";
import UniversityFeatures from "./UniversityFeatures";
import WhatNew from "./WhatNew";
import Research from "./Research";
export default function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState('');

    const programs = [
        'B.Tech Chemical Engineering',
        'B.Tech Computer Science',
        'B.Tech Mechanical Engineering',
        'B.Tech Electrical Engineering',
        'B.Tech Civil Engineering',
        'M.Tech Data Science',
        'M.Tech Artificial Intelligence',
        'M.Tech Machine Learning'
    ];

    const handleSelect = (program: any) => {
        setSelectedProgram(program);
        setIsOpen(false);
    };


    return (
        <>
            {/* hero section start here ....*/}
            <FloatingSidebar />
            <section className="relative h-screen overflow-hidden mt-0">
                <div className="absolute inset-0 w-full h-full">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://mitwpu.edu.in/uploads/banner/banner_video_desktop.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
            </section>

            {/* hero section end here ....*/}


            {/* card section start here ....*/}
            <section className=" flex flex-col items-center justify-center text-center bg-white text-black py-16 px-4">

                <h1 className="text-lg md:text-4xl font-bold mb-4 hover:text-[#DA3948]">43+ Years Legacy of Academic Excellence</h1>
                <p className="text-sm md:text-lg max-w-4xl mt-10">
                    A University for Life Transformation
                </p>

                <div className="mt-10 w-full max-w-6xl px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-[#DA3948] overflow-hidden">

                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#DA3948] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

                            <h2 className="text-4xl font-bold mb-3 text-[#DA3948] relative z-10">150+</h2>

                            <p className="text-sm font-bold text-gray-700 relative z-10">Future-ready Programmes</p>

                        </div>
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-[#DA3948] overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#DA3948] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <h2 className="text-4xl font-bold mb-3 text-[#DA3948] relative z-10">25,000+</h2>
                            <p className="text-sm font-semibold text-gray-700 relative z-10">Students on Campus</p>
                        </div>
                        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-[#DA3948] overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#DA3948] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <h2 className="text-4xl font-bold mb-3 text-[#DA3948] relative z-10">100+</h2>
                            <p className="text-sm font-semibold text-gray-700 relative z-10">Students Clubs</p>
                        </div>
                        <div
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-[#DA3948] overflow-hidden"
                        >
                            <div
                                className="absolute top-0 right-0 w-20 h-20 bg-[#DA3948] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <h2 className="text-4xl font-bold mb-3 text-[#DA3948] relative z-10">2000+</h2>
                            <p className="text-sm font-semibold text-gray-700 relative z-10">Industry Connects</p>
                        </div>
                        <div
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-[#DA3948] overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#DA3948] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <h2
                                className="text-4xl font-bold mb-3 text-[#DA3948] relative z-10"
                            >
                                100,000+
                            </h2>
                            <p className="text-sm font-semibold text-gray-700 relative z-10">Global Alumni Network</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* card section end here ....*/}

            {/* future ready programme section start here ....*/}
            <section className=" bg-white ">
                <div className="max-w-7xl mx-auto h-full pt-10">
                    <h2 className="text-4xl text-black text-center">Future-Ready Programmes</h2>
                    <div className="flex items-center mt-4 text-black justify-center gap-6 sm:flex-row flex-col">
                        <div>
                            <p className="text-2xl">    Discover diverse, new-age programmes designed to shape future leaders.</p>
                        </div>

                        <div className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type Program Name"
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                    onFocus={() => setIsOpen(true)}

                                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}

                                    className="w-[300px] py-4 pl-4 pr-12  border-2 border-gray-300 rounded-full text-gray-700 text-base placeholder-gray-400 focus:outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 transition-all text-xl duration-200  bg-gray-300"
                                />
                                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6  text-[#5DCDDB]" />
                            </div>

                            {/* Dropdown List */}
                            {isOpen && (
                                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                                    {programs
                                        .filter(program =>
                                            program.toLowerCase().includes(selectedProgram.toLowerCase())
                                        )
                                        .map((program, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelect(program)}
                                                className="px-5 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 text-gray-700 border-b border-gray-100 last:border-b-0"
                                            >
                                                {program}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 pt-10 pb-10 max-w-7xl mx-auto">
                    <div className="bg-white border-b-4 border-[#25366e] hover:border-b-4 hover:border-[#DA3948] cursor-pointer transition-colors duration-300 p-6  border-r-4 shadow-sm border-[1]">
                        <h3 className="text-2xl font-bold text-[#25366e] text-center">
                            Undergraduate Programmes
                        </h3>
                    </div>

                    <div className="bg-white border-b-4 border-[#25366e] hover:border-b-4 hover:border-[#DA3948] cursor-pointer transition-colors duration-300 p-6 border-r-4 border-[1] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#25366e] text-center">
                            Postgraduate Programmes
                        </h3>
                    </div>

                    <div className="bg-white border-b-4 border-[#25366e] hover:border-b-4 hover:border-[#DA3948] cursor-pointer transition-colors duration-300 p-6  border-r-4 border-[1] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#25366e] text-center ">
                            Ph.D.<br />Programmes
                        </h3>
                    </div>

                    <div className="bg-white border-b-4 border-r-4 border-[#25366e] hover:border-b-4 hover:border-[#DA3948] cursor-pointer transition-colors duration-300 p-6 border-[1] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#25366e] text-center">
                            Diplomas & Certifications
                        </h3>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <Research />
            </section>
            <section className="w-full">
                <UniversityFeatures />
            </section>
            <section className="w-full">
                <WhatNew />
            </section>
            <section className="w-full">
                <LatestHappenings />
            </section>
            <section className="w-full">
                <LifeMITWPU />
            </section>
            <section w-full>
                <StudentTestimonials />
            </section>

            <section className="w-full">
                <HistoryLegacy />
            </section>

        </>
    );
}
