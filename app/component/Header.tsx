'use client';
import React, { useState, useEffect } from 'react';
import { Menu, Users, GraduationCap, Building2, FileCheck, Briefcase, UserCircle, Leaf, BookOpen, FileText, Globe, Lightbulb, Newspaper } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

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

    {/* 
        Menu  info to be added 
        
NEWSLETTER
TESTIMONIAL
Student
CONTACT US
HAPPENINGS
News
Events
Notices & Announcements
Image Gallery
Video Gallery
Media Coverage

        */}


    return (
        <>
            <nav className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}>
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="pt-6 pb-6">
                            <a href='/' className='block'>
                                <img
                                    width="200"
                                    height="99"
                                    src="https://mitwpu.edu.in/uploads/images/MIT-WPU_LOGO.webp"
                                    alt="MitWpu logo"
                                />
                            </a>
                        </div>

                        <div className="flex flex-col ">
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
                                <li className="px-3">
                                    <a href="#" className={`hover:text-blue-600 flex items-center gap-1 transition ${scrolled ? 'text-white' : 'text-white'}`}>
                                        <Menu size={30} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}