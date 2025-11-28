'use client';

import Dashboard from "../component/dashboard/Sidebar";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="min-h-screen flex bg-gray-100">

            < Dashboard />

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-6">
                {children}
            </main>
        </div>
    );
}
