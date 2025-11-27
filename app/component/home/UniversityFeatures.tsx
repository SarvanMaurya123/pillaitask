"use client";
import { Building2, BookOpen, Building } from 'lucide-react';

export default function UniversityFeatures() {
    const features = [
        {
            icon: (isHovered: any) => <Building2 className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "Interdisciplinary University",
            description: "Immerse yourself in an interdisciplinary educational experience with 12 specialised schools, offering over 150 programmes across diverse domains—preparing you to lead in tomorrow's global economy.",
            bgColor: "bg-white"
        },
        
        {
            icon: (isHovered: any) => <BookOpen className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "Learning Beyond Classrooms",
            description: "MIT-WPU's Degree++ initiatives offer credit-based, real-world experiences that go beyond textbooks. From rural to global immersions and socially driven projects, students gain practical skills, leadership, and a strong sense of social responsibility from day one.",
            bgColor: "bg-white"
        },
        {
            icon: (isHovered: any) => <Building className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "World-Class Infrastructure",
            description: "Learn in an environment designed for innovation and discovery, with over 240 state-of-the-art laboratories, smart classrooms, and specialised Centres of Excellence. This cutting-edge infrastructure empowers students with hands-on learning and interdisciplinary research.",
            bgColor: "bg-white"
        },
        {
            icon: (isHovered: any) => <Building2 className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "Interdisciplinary University",
            description: "Immerse yourself in an interdisciplinary educational experience with 12 specialised schools, offering over 150 programmes across diverse domains—preparing you to lead in tomorrow's global economy.",
            bgColor: "bg-white"
        },
        {
            icon: (isHovered: any) => <BookOpen className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "Learning Beyond Classrooms",
            description: "MIT-WPU's Degree++ initiatives offer credit-based, real-world experiences that go beyond textbooks. From rural to global immersions and socially driven projects, students gain practical skills, leadership, and a strong sense of social responsibility from day one.",
            bgColor: "bg-white"
        },
        {
            icon: (isHovered: any) => <Building className={`w-16 h-16 ${isHovered ? 'text-white' : 'text-red-600'} transition-colors duration-500`} strokeWidth={1.5} />,
            title: "World-Class Infrastructure",
            description: "Learn in an environment designed for innovation and discovery, with over 240 state-of-the-art laboratories, smart classrooms, and specialised Centres of Excellence. This cutting-edge infrastructure empowers students with hands-on learning and interdisciplinary research.",
            bgColor: "bg-white"
        }
    ];

    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className='text-4xl font-bold text-center text-black hover:text-[#DA3948]'>Why choose MIT-WPU, Pune?</h1>
                <p className=' text-center mx-30 text-2xl my-10 text-black'>MIT World Peace University, one of the prestigious institutions in India, drives academic excellence and innovation. We shape future leaders who champion the philosophy of global peace through the union of Science and Spirituality.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden ${feature.bgColor} ${feature.bgColor === 'bg-blue-900' ? 'text-white' : 'text-gray-900'} p-10 flex flex-col items-start transition-all duration-300 hover:shadow-xl group mb-4`}
                        >
                            {/* Hover background overlay */}
                            <div className={`absolute inset-0 ${feature.bgColor === 'bg-blue-900' ? 'bg-blue-800' : 'bg-blue-900'} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}></div>

                            {/* Content wrapper with relative positioning */}
                            <div className="relative z-10 flex flex-col items-start w-full group-hover:text-white transition-colors duration-500">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {feature.icon(false)}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {feature.icon(true)}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-base leading-relaxed ${feature.bgColor === 'bg-blue-900' ? 'text-white/90' : 'text-gray-700'} group-hover:text-white/90 transition-colors duration-500`}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}