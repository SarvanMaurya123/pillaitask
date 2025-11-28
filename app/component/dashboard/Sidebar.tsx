"use client"

import { useState } from "react"

const dummyUsers = [
    {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8901",
        course: "Computer Science",
        state: "California",
        city: "Los Angeles",
        program: "Bachelor's",
        submittedAt: "2025-01-15",
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1 234 567 8902",
        course: "Mathematics",
        state: "New York",
        city: "New York City",
        program: "Master's",
        submittedAt: "2025-01-16",
    },
    {
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "+1 234 567 8903",
        course: "Physics",
        state: "Texas",
        city: "Houston",
        program: "PhD",
        submittedAt: "2025-01-17",
    },
    {
        name: "Alice Brown",
        email: "alice@example.com",
        phone: "+1 234 567 8904",
        course: "Chemistry",
        state: "Florida",
        city: "Miami",
        program: "Bachelor's",
        submittedAt: "2025-01-18",
    },
    {
        name: "Charlie Wilson",
        email: "charlie@example.com",
        phone: "+1 234 567 8905",
        course: "Biology",
        state: "Illinois",
        city: "Chicago",
        program: "Master's",
        submittedAt: "2025-01-19",
    },
]

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? "w-64" : "w-16"
                    } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
            >
                {/* Toggle Button */}
                <div className="p-4 border-b border-gray-200">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            {sidebarOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-4">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                        {sidebarOpen && <span>Users</span>}
                    </a>
                </nav>

                {/* User Info */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                            D
                        </div>
                        {sidebarOpen && (
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-gray-900 truncate">Demo User</p>
                                <p className="text-xs text-gray-500 truncate">demo@example.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Users Table</h1>

                {/* Table Container */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        State
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        City
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Program
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Submitted At
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {dummyUsers.map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{user.name}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.email}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.phone}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.course}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.state}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.city}</td>
                                        <td className="px-4 py-3 text-sm whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                                {user.program}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.submittedAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}