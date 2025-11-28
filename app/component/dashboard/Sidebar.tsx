"use client";

import React, { useEffect, useState } from "react";
import { Users, LogOut, X, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import logoutAdmin from "@/api/logout/adminLogout";
import { useRouter } from "next/navigation";
import getCurrentAdminData from "@/api/get-current-admin-data/getCurrentAdminData";
import { AdminData } from "@/app/types/admin/currentLoggedInAdminData";
import SidebarSkeleton from "./skeleton/SidebarSkeleton";
import { LoaderSvg } from "@/public/form/formSvg";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [activeTab, setActiveTab] = useState("users");
  const [isMinimized, setIsMinimized] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState<AdminData | null>({});

  const menuItems = [{ id: "users", label: "Users", icon: Users }];
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await logoutAdmin();
      toast.success(response?.message || "Logged out successfully!");
      router.push("/admin/login");
    } catch (error: unknown) {
      toast.error("Error during logout. Please try again.");
    }
  };

  useEffect(() => {
    const getCurrentLoggedInIserData = async () => {
      try {
        setIsLoading(true);
        const response = await getCurrentAdminData();
        console.log("Current Admin Data: ", response?.data);
        setAdminData(response?.data);
      } catch (error) {
        console.error("Error fetching current admin data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!adminData || !adminData?.email) {
      getCurrentLoggedInIserData();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <SidebarSkeleton />
      ) : (
        <>
          {" "}
          {/* Mobile Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
          {/* Sidebar */}
          <aside
            className={`
        fixed top-0 left-0 z-50 h-full 
      bg-slate-900
        text-white shadow-2xl
        transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 
        ${isMinimized ? "lg:w-20" : "lg:w-64"}
      `}
          >
            <div className="flex flex-col h-full relative">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                {!isMinimized && (
                  <h1 className="text-xl font-semibold tracking-wide">
                    Admin Panel
                  </h1>
                )}

                <button
                  onClick={() => setIsOpen(false)}
                  className="lg:hidden text-white/80 hover:text-white transition"
                >
                  <X size={22} />
                </button>
              </div>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="
            hidden lg:flex 
            absolute -right-3 top-16 
            w-8 h-8 bg-white cursor-pointer text-indigo-700 
            rounded-[12px] items-center justify-center 
            shadow-md hover:shadow-lg 
            transition hover:scale-105
          "
              >
                {isMinimized ? (
                  <ChevronRight size={18} />
                ) : (
                  <ChevronLeft size={18} />
                )}
              </button>

              {/* Menu Section */}
              <nav className="flex-1 px-3 py-6 space-y-3">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`
                  w-full flex items-center gap-4 px-5 py-3 
                  rounded-[12px]
                  transition-all duration-200
                  ${
                    activeTab === item.id
                      ? "bg-white/20 text-white shadow-inner"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                  ${isMinimized ? "lg:justify-center" : ""}
                `}
                      title={isMinimized ? item.label : ""}
                    >
                      <Icon size={22} className="shrink-0" />
                      {!isMinimized && (
                        <span className="font-medium">{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="p-4 inline-flex items-center justify-center border-white/10">
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className={`
              w-full flex items-center inline-flex items-center justify-center gap-4 px-5 py-3 
              rounded-[12px]
              bg-[#BE283C] border hover:bg-[#be283cc7] cursor-pointer border-[#d62832]
              transition duration-200
              ${isMinimized ? "lg:justify-center" : ""}
            `}
                  title={isMinimized ? "Logout" : ""}
                >
                  <LogOut size={22} className="shrink-0" />
                  {!isMinimized && <span className="font-medium">Logout</span>}
                </button>
              </div>

              {/* User Info */}
              <div
                className={`
            px-4 py-5 border-t border-white/10 bg-slate-900 
            text-sm 
            ${isMinimized ? "lg:hidden" : ""}
          `}
              >
                <p className="text-white font-medium">
                  {adminData?.name || "Admin"}
                </p>
                <p className="text-indigo-200 text-xs">{adminData?.email}</p>
              </div>
            </div>
          </aside>
          {showLogoutModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center px-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-[12px] bg-red-100 mx-auto mb-4 flex items-center justify-center">
                  <LogOut size={28} className="text-red-600" />
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Logout Confirmation
                </h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to logout?
                </p>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="px-6 py-2.5 rounded-[12px] border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleLogout}
                    className="px-6 py-2.5 rounded-[12px] inline-flex items-center gap-2  text-white cursor-pointer font-medium bg-[#BE283C] border hover:bg-[#be283cc7] border-[#d62832] transition shadow-md"
                  >
                    Yes, Logout {isLoading && <LoaderSvg />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
