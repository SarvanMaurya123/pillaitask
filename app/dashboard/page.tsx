'use client';

import React, { useEffect, useState } from "react";
import GetAdmisionData from "@/api/getadmisiondata/admisiondata";
import AdmissionFormType from "../types/admissionForm";

export default function Dashboard() {
    const [usersData, setUsersData] = useState<AdmissionFormType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetAdmisionData();
                // Assuming data is { success: boolean, data: AdmissionFormType[] }
                if (data.success) {
                    setUsersData(data.data);
                }
            } catch (error) {
                console.error("Error fetching admission data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="pt-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Users Management</h2>
                <p className="text-gray-600">Manage all registered users from this dashboard.</p>
            </div>

            {/* Users Table */}
            <div className="bg-white p-6 border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">State</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Program</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Course</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {usersData.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.state}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.program}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
