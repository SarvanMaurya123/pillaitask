'use client';

import React, { useState } from 'react';
import Sidebar from '../component/dashboard/Sidebar';
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


                {/* Dashboard Content */}
                <main>{children}</main>
            </div>
        </div>
    );
}