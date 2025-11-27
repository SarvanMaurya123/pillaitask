'use client';

import { ArrowBigRight } from "lucide-react";

export default function LifeMITWPU() {
    return (
        <div
            className="relative w-full h-[450px] bg-fixed bg-center bg-cover rounded-lg shadow-lg"
            style={{
                backgroundImage: "url('https://mitwpu.edu.in/uploads/placement/6318133d722281662522173.webp')",
            }}
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

                <h2 className="text-5xl font-bold mb-4">Life@MIT-WPU, Pune</h2>

                <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                    Experience student life like never before — friendships, growth, and fun!
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg">
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Academic Facilities</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium ">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Student Clubs</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Rural Immersion</span>
                        </button>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg">
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Hostel Facilities</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Adventure Club</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>National Immersion</span>
                        </button>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg">
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Medical Facilities</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Sports@MIT-WPU</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-5 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>International Immersion</span>
                        </button>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg">
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Other Facilities</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Library</span>
                        </button>
                        <button className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 backdrop-blur-sm text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                            <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-3xl" />
                            <span>Student Achievements</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
