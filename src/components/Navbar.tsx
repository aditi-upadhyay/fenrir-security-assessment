import React from 'react';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-white border-b border-gray-100 shrink-0 gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-sm font-bold text-gray-800 whitespace-nowrap">Scan</span>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 min-w-0 overflow-hidden">
                    <Home size={16} className="text-gray-400 shrink-0" />
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium whitespace-nowrap">Private Assets</span>
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium text-[#00d2b4] whitespace-nowrap">New Scan</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                    Export Report
                </button>
                <button className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-red-500 bg-red-50 border border-red-100 rounded-md hover:bg-red-100 transition-colors shadow-sm whitespace-nowrap">
                    Stop Scan
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
