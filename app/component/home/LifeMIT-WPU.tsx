'use client';

import { ArrowBigRight } from "lucide-react";

export default function LifeMITWPU() {
    return (
        <div className="relative w-full rounded-lg shadow-lg overflow-hidden">

            {/* Desktop/Large Device Background */}
            <div
                className="hidden md:block absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://mitwpu.edu.in/uploads/placement/6318133d722281662522173.webp')",
                }}
            ></div>

            {/* Mobile & Tablet Image */}
            <img
                src="https://mitwpu.edu.in/uploads/placement/6318133d722281662522173.webp"
                alt="Life MIT-WPU"
                className="md:hidden w-full h-[300px] sm:h-[350px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10 py-10 md:py-20">

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Life@MIT-WPU, Pune
                </h2>

                <p className="text-base sm:text-lg md:text-xl max-w-2xl text-justify leading-relaxed">
                    Experience student life like never before — friendships, growth, and fun!
                </p>

                {/* Buttons Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                        {["Academic Facilities", "Student Clubs", "Rural Immersion"].map((item, i) => (
                            <button key={i} className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                                <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-full" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                        {["Hostel Facilities", "Adventure Club", "National Immersion"].map((item, i) => (
                            <button key={i} className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                                <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-full" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                        {["Medical Facilities", "Sports@MIT-WPU", "International Immersion"].map((item, i) => (
                            <button key={i} className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                                <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-full" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-3 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                        {["Other Facilities", "Library", "Student Achievements"].map((item, i) => (
                            <button key={i} className="bg-blue-900/90 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-4 rounded-lg flex items-center gap-3 text-left font-medium">
                                <ArrowBigRight className="w-5 h-5 shrink-0 bg-gray-200/30 rounded-full" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
