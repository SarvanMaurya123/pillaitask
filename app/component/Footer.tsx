"use client";
import { ArrowRight, Facebook, Twitter, Youtube, Linkedin, Instagram, AtSign } from 'lucide-react';
import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto">
                    {/* About Us Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold   pb-2 inline-block">About Us</h2>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">About MIT-WPU, Pune</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">History & Legacy</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Founder</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Executive President</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Executive Director</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">NIRF</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Ranking & Accreditation</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">International Collaborations</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Social Initiatives</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Faculty Achievements</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">National Ragging Prevention Programme</a></li>
                            <li><a href="#" className=" transition-colors duration-200 hover:translate-x-1 inline-block">Administrative Offices</a></li>
                        </ul>
                    </div>

                    {/* Programmes Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-amber-400 border-b-2 border-amber-400 pb-2 inline-block">Programmes</h2>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Undergraduate Programmes</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Postgraduate Programmes</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Ph.D. Programmes</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Diplomas & Certifications</a></li>
                        </ul>
                    </div>

                    {/* Research Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-amber-400 border-b-2 border-amber-400 pb-2 inline-block">Research</h2>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">CSR</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Equality and Diversity</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Newsletters</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Contact Us</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Admissions</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Life@MIT-WPU</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Happenings</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Alumni</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Work With Us</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Social Initiatives Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-amber-400 border-b-2 border-amber-400 pb-2 inline-block">Social Initiatives</h2>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">National Legislators' Conference (NLC) Bharat</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">World Peace Dome</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">World Parliament of Science, Religion & Philosophy</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Bharatiya Chhatra Sansad</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">National Women's Parliament</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">Bharat Asmita National Awards</a></li>
                            <li><a href="#" className="hover:text-amber-300 transition-colors duration-200 hover:translate-x-1 inline-block">National Teachers' Congress (NTC)</a></li>
                        </ul>

                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <h2 className="font-semibold text-amber-400 mb-2"><a href="#" className="hover:text-amber-300">Newsletter Signup</a></h2>
                            <p className="text-xs text-gray-300 mb-3">By subscribing to our mailing list you will always be updated with the latest news from us.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 p-2.5 rounded-l-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <button className="bg-amber-500 hover:bg-amber-600 transition-colors duration-200 p-2.5 rounded-r-lg">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Language Section */}
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <img
                                src="https://mitwpu.edu.in/assets/frontend/images/360-logo-mit.jpg"
                                alt="Virtual Tour"
                                className="w-24 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
                            />
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-amber-400">Follow Us</p>
                            <div className="flex gap-3">
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2.5 rounded-full transition-all duration-200 hover:scale-110">
                                    <AtSign className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <p className="text-sm font-semibold text-amber-400">Language</p>
                            <select className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors cursor-pointer">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Marathi</option>
                            </select>
                        </div>

                        <div className="bg-gray-800/30 p-3 rounded-lg border-l-4 border-amber-500">
                            <p className="text-xs text-gray-300 italic">"This translation is system-generated and may contain errors or inaccuracies. For the most accurate information, please refer to the original English version of the website."</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Links Bar */}
                <div className="bg-black/60 backdrop-blur-sm w-full mt-8 border-t border-gray-700">
                    <ul className="flex flex-wrap justify-center items-center py-4 gap-4 text-xs px-4">
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Admission Policy</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Mandatory Disclosures</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Cautionary Notice</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Fraud Alert</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Tender Notices</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Sitemap</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Disclaimer</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Copyright Statement</a></li>
                        <li className="text-gray-600">|</li>
                        <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Data Protection and Privacy Statement</a></li>
                    </ul>
                </div>

                {/* Copyright Section */}
                <div className="flex flex-wrap gap-6 items-center justify-center mt-6 text-xs text-gray-400">
                    <p>© 2025 All Rights Reserved</p>
                    <span className="text-gray-600">|</span>
                    <p>Website Design and Development by MIT-WPU</p>
                </div>
            </footer>
        </>
    );
}