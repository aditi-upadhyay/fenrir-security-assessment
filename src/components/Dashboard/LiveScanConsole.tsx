import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import ActivityLog from './ActivityLog';
import FindingLog from './FindingLog';
import { Timer } from 'lucide-react';

const LiveScanConsole: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'Activity Log' | 'Verification Loops'>('Activity Log');

    return (
        <div className="flex-[2] min-h-[500px] lg:min-h-0 bg-white dark:bg-gray-900 rounded-md shadow-sm border border-gray-50 dark:border-gray-800 flex flex-col overflow-hidden transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 lg:px-6 py-3 border-b border-gray-50 dark:border-gray-800 shrink-0 gap-3 sm:gap-0">
                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00d2b4] animate-pulse" />
                        <h2 className="text-sm font-bold text-gray-800 dark:text-gray-100">Live Scan Console</h2>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-2">
                        <Timer size={16} className="text-[#00d2b4]" />
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Running...</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300 dark:text-gray-600">
                    <ChevronDown size={20} className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" />
                    <X size={20} className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" />
                </div>
            </div>

            <div className="border-b border-gray-50 dark:border-gray-800 px-4 lg:px-6 shrink-0 overflow-x-auto no-scrollbar">
                <div className="flex gap-6 lg:gap-12 min-w-max">
                    {['Activity Log', 'Verification Loops'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`py-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest border-b-2 transition-all
                                ${activeTab === tab
                                    ? 'border-[#00d2b4] text-[#00d2b4]'
                                    : 'border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-400'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-hidden p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
                <ActivityLog />

                <div className="hidden lg:block w-[1px] bg-gray-50 dark:bg-gray-800 my-2" />

                <FindingLog />
            </div>
        </div>
    );
};

export default LiveScanConsole;
