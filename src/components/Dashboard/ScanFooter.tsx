import React from 'react';

const ScanFooter: React.FC = () => {
    const stats = [
        { label: 'Sub-Agents', value: 0 },
        { label: 'Parallel Executions', value: 2 },
        { label: 'Operations', value: 1 },
    ];

    const severities = [
        { label: 'Critical', value: 0, color: 'text-red-500' },
        { label: 'High', value: 0, color: 'text-orange-500' },
        { label: 'Medium', value: 0, color: 'text-yellow-500' },
        { label: 'Low', value: 0, color: 'text-blue-500' },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 lg:px-6 py-3 bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 shadow-sm rounded-md shrink-0 gap-4 sm:gap-0 transition-colors duration-300">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 lg:gap-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                        <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">{stat.label}:</span>
                        <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{stat.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 lg:gap-6">
                {severities.map((sev, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${sev.color}`}>{sev.label}:</span>
                        <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{sev.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScanFooter;
