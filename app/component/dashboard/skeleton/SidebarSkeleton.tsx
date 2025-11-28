"use client";

export default function SidebarSkeleton() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white shadow-2xl p-6 hidden lg:flex flex-col">
      {/* Header */}
      <div className="h-7 w-32 bg-gray-700 rounded-md mb-6"></div>

      {/* Menu Items */}
      <div className="space-y-4 flex-1">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-10 w-full bg-gray-800/70 rounded-[12px]"
            ></div>
          ))}
      </div>

      {/* User Info */}
      <div className="border-t border-white/10 pt-6 space-y-3">
        <div className="h-4 w-32 bg-gray-700 rounded-md"></div>
        <div className="h-3 w-24 bg-gray-700 rounded-md"></div>
      </div>

      {/* Logout */}
      <div className="mt-6">
        <div className="h-10 w-full bg-gray-700/60 rounded-[12px]"></div>
      </div>
    </aside>
  );
}
