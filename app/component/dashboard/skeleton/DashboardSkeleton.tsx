"use client";

export default function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="pt-20 space-y-3">
        <div className="h-8 w-60 bg-gray-200 rounded-lg"></div>
        <div className="h-4 w-80 bg-gray-200 rounded-md"></div>
      </div>

      <div className="bg-white p-6 border border-gray-200 rounded-[16px] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <th key={i} className="px-6 py-4">
                      <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    {Array(6)
                      .fill(0)
                      .map((__, j) => (
                        <td key={j} className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 w-full bg-gray-200 rounded-md"></div>
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
