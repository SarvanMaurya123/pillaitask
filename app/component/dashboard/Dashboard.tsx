"use client";

import { useEffect, useState } from "react";
import GetAdmisionData from "@/api/getadmisiondata/admisiondata";
import type AdmissionFormType from "@/app/types/admissionForm";

export default function Dashboard() {
  const [usersData, setUsersData] = useState<AdmissionFormType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAdmisionData();
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
    return (
      <div className="p-6 lg:p-10 space-y-6">
        <div className="pt-6 lg:pt-10">
          <div className="h-10 w-64 bg-slate-200 rounded-xl animate-pulse mb-3" />
          <div className="h-5 w-96 bg-slate-200 rounded-lg animate-pulse" />
        </div>
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-14 bg-slate-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8">
      <div className="pt-6 lg:pt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Admission Enquiries Received
        </h2>
        <p className="text-gray-600">
          View and manage all submitted admission enquiries.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b">
              <tr>
                {["Name", "Email", "Phone", "State", "Program", "Course"].map(
                  (title) => (
                    <th
                      key={title}
                      className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider"
                    >
                      {title}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {usersData.map((user, i) => (
                <tr
                  key={i}
                  className="hover:bg-indigo-50/60 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{user.email}</td>
                  <td className="px-6 py-4 text-slate-600">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs">
                      {user.state}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs">
                      {user.program}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-violet-100 text-violet-700 text-xs">
                      {user.course}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
