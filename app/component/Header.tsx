'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = (menuName: any) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}>
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="pt-6 pb-6 w-full max-w-[200px] md:w-auto md:max-w-none mx-auto">
                            <a href="/" className="block">
                                <img
                                    src="https://mitwpu.edu.in/uploads/images/MIT-WPU_LOGO.webp"
                                    alt="MitWpu logo"
                                    className="md:w-[200px]"
                                />
                            </a>
                        </div>


                        <div className="flex flex-col md:block hidden">
                            <ul className="flex items-center text-sm font-medium space-x-1 mb-3.5">
                                <li className="border-r border-gray-300 pr-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>

                                        IQAC
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>

                                        Faculty
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Alumni
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Placement
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        UGC Approved
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Work With Us
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Student Information
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Green Campus
                                    </a>
                                </li>
                                <li className="px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Blogs
                                    </a>
                                </li>
                                <li className="pl-3">
                                    <a
                                        href="#"
                                        className="bg-blue-600 px-5 py-2 rounded-full text-white hover:bg-blue-700 transition font-medium"
                                    >
                                        Apply Now
                                    </a>
                                </li>
                            </ul>

                            <ul className="flex items-center text-sm font-medium mt-3 space-x-1 ml-6">
                                <li className="border-r border-gray-300 pr-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        About Us
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Programmes
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Admissions
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Academics
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Life@MIT-WPU
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        International
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Research
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Innovation
                                    </a>
                                </li>
                                <li className="border-r border-gray-300 px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        Media Coverage
                                    </a>
                                </li>
                                <li className="px-3 cursor-pointer">
                                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`hover:text-blue-600 cursor-pointer flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Popup Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 hidden md:block" onClick={() => setIsMenuOpen(false)}>
                    <div className="fixed right-0 top-0 z-10 h-full w-[600px] bg-red-500 text-white shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className='grid md:grid-cols-2'>
                            <div className="p-8 mt-30">
                                {/* Newsletter Section */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4 tracking-wide">NEWSLETTER</h2>
                                    <div className="h-px bg-white/40 w-full mb-6"></div>
                                </div>

                                {/* Testimonial Section */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4 tracking-wide">TESTIMONIAL</h2>
                                    <div className="h-px bg-white/40 w-full mb-6"></div>
                                    <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg">
                                        Student
                                    </a>
                                </div>

                                {/* Contact Us Section */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 tracking-wide">CONTACT US</h2>
                                    <div className="h-px bg-white/40 w-full mb-6"></div>
                                </div>
                            </div>
                            {/* Happenings Section */}
                            <div className="mb-12 p-8 mt-30">
                                <h2 className="text-2xl font-bold mb-4 tracking-wide">HAPPENINGS</h2>
                                <div className="h-px bg-white/40 w-full mb-6"></div>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            Notices & Announcements
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            Image Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            Video Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white hover:text-white/80 transition-colors duration-300 text-lg block">
                                            Media Coverage
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}