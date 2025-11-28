"use client";
import { Phone, MessageCircle, Headphones } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdmissionForm from "./AdmissionForm";

export default function FloatingSidebar() {
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [adminssionHover, setAdmissionHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleAdmissionMobile = () => {
    if (isMobile) {
      setAdmissionHover((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col gap-2 -top-3.5">
      {/* Admission Enquiry  here...*/}

      <div className="flex items-center justify-center fixed right-0 z-50 md:top-[0%]">
        <a
          href="#admission"
          aria-label="Admission Enquiry"
          className="bg-[#2d3561] text-white px-2 py-3 flex items-center justify-center hover:bg-[#3d4571]  duration-300 shadow-lg rounded-tl-sm rounded-bl-sm group mt-2"
          onMouseEnter={() => {
            if (!isMobile) setAdmissionHover(true);
          }}
          onMouseLeave={() => {
            if (!isMobile) setAdmissionHover(false);
          }}
          onClick={toggleAdmissionMobile}
        >
          <span className="writing-mode-vertical text-sm font-semibold tracking-wider whitespace-nowrap transform rotate-180">
            Admission Enquiry
          </span>
        </a>
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            width: adminssionHover ? (isMobile ? "270px" : "320px") : "0px",
          }}
          onMouseEnter={() => {
            if (!isMobile) setAdmissionHover(true);
          }}
          onMouseLeave={() => {
            if (!isMobile) setAdmissionHover(false);
          }}
        >
          <AdmissionForm />
        </div>
      </div>

      {/* Chat with Student  here....*/}
      <a
        href="#chat"
        aria-label="Chat with Student"
        className="bg-[#f4b942] hidden md:flex text-[#2d3561] px-2 py-3 items-center justify-center hover:bg-[#f5c35c]  duration-300 fixed right-0 top-[60%] z-50 shadow-lg rounded-tl-sm rounded-bl-sm  group w-fit"
      >
        <span className="writing-mode-vertical text-sm font-semibold tracking-wider whitespace-nowrap transform rotate-180">
          Chat with Student
        </span>
      </a>

      {/* Call Button here....*/}
      <a
        href="tel:+919876543210"
        aria-label="Call us at +91 98765 43210"
        className="bg-[#2d3561] text-white p-2 flex items-center justify-center hover:bg-[#3d4571]  duration-300 shadow-lg rounded-tl-sm fixed right-0 top-[68%] md:top-[86%] z-50  rounded-bl-sm"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp with Hover Effect here....*/}
      <div className="fixed right-0 top-[78%] md:top-[93%] z-50  h-9">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us at +91 98765 43210"
          onMouseEnter={() => setWhatsappHover(true)}
          onMouseLeave={() => setWhatsappHover(false)}
          className="bg-[#25d366] text-white p-2 flex items-center hover:bg-[#20c157] transition-all duration-300 shadow-lg absolute right-0 rounded-tl-sm rounded-bl-sm overflow-hidden"
          style={{
            width: whatsappHover ? "200px" : "56px",
            justifyContent: whatsappHover ? "flex-start" : "center",
          }}
        >
          <MessageCircle className="w-5 h-5 shrink-0" fill="currentColor" />
          <span
            className={`ml-3 font-semibold text-sm whitespace-nowrap transition-opacity duration-300 ${
              whatsappHover ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            +91 98765 43210
          </span>
        </a>
      </div>

      {/* Support Button here....*/}
      {/* <a
        href="#support"
        aria-label="Customer Support"
        className="bg-[#dc3545] text-white p-2 flex items-center justify-center hover:bg-[#c82333]  shadow-lg rounded-tl-sm rounded-bl-sm mb-2 fixed right-0 top-[70%] z-50 "
      >
        <Headphones className="w-5 h-5" />
      </a> */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
}
