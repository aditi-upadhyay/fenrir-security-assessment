import React from 'react';
import ScanTable from './Table';
import StatsOverview from './StatsOverview';

const Dashboard: React.FC = () => {
    return (
        <div className="h-full flex flex-col gap-8">
            <StatsOverview />

            <div className="flex-1 bg-white rounded-md shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col min-h-0 p-6">
                {/* Header Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 mb-6">
                    <div className="flex-1 max-w-2xl relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search scans by name or type..."
                            className="w-full pl-11 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a99d]/20 focus:border-[#00a99d] transition-all text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4.5h18M6.75 9h10.5M11.25 13.5h1.5" />
                            </svg>
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                            </svg>
                            Column
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 bg-[#00a99d] hover:bg-[#009689] text-white rounded-md text-sm font-bold transition-all shadow-sm active:scale-95">
                            <span className="text-xl leading-none">+</span>
                            New scan
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="flex-1 overflow-hidden flex flex-col">
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <ScanTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
