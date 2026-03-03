import React from 'react';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-2 bg-white border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-800">Scan</span>
                <div className="flex items-center gap-2 text-gray-400">
                    <Home size={16} className="text-gray-400" />
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium">Private Assets</span>
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium text-[#00d2b4]">New Scan</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="px-6 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    Export Report
                </button>
                <button className="px-6 py-2 text-sm font-semibold text-red-500 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors shadow-sm">
                    Stop Scan
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
