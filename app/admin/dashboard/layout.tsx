"use client";

import Sidebar from "@/app/component/dashboard/Sidebar";
import { Hamburger } from "lucide-react";
import React, { useState } from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        <header className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200 px-4 py-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2.5 rounded-[10px] bg-gray-100 hover:bg-gray-200 transition"
          >
            <Hamburger />
          </button>
        </header>

        {/* Dashboard Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
