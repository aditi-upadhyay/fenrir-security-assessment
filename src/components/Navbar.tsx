import React from 'react';
import { Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shrink-0 gap-3 transition-colors duration-300">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap">Scan</span>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 dark:text-gray-500 min-w-0 overflow-hidden">
                    <Home size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium whitespace-nowrap">Private Assets</span>
                    <span className="text-xs">/</span>
                    <span className="text-xs font-medium text-[#00d2b4] whitespace-nowrap">New Scan</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggle />
                <button className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm whitespace-nowrap">
                    Export Report
                </button>
                <button className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors shadow-sm whitespace-nowrap">
                    Stop Scan
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
