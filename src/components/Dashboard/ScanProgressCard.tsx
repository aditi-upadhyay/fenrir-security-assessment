import React from 'react';
import { Target, Clock, Shield, FileText, ClipboardList, MousePointer2 } from 'lucide-react';

const ScanProgressCard: React.FC = () => {
    const details = [
        { label: 'Scan Type', value: 'Grey Box', icon: <Shield size={16} className="text-gray-400" /> },
        { label: 'Targets', value: 'google.com', icon: <Target size={16} className="text-gray-400" /> },
        { label: 'Started At', value: 'Nov 22, 09:00AM', icon: <Clock size={16} className="text-gray-400" /> },
        { label: 'Credentials', value: '2 Active', icon: <Shield size={16} className="text-gray-400" /> },
        { label: 'Files', value: 'Control.pdf', icon: <FileText size={16} className="text-gray-400" /> },
        { label: 'Checklists', value: '40/350', icon: <ClipboardList size={16} className="text-gray-400" />, subValue: '40/350', isTeal: true },
    ];

    const steps = [
        { label: 'Spidering', icon: <MousePointer2 size={24} />, active: true },
        { label: 'Mapping', icon: <span className="text-xl">☍</span>, active: false },
        { label: 'Testing', icon: <span className="text-xl">🧪</span>, active: false },
        { label: 'Validating', icon: <span className="text-xl">☑</span>, active: false },
        { label: 'Reporting', icon: <span className="text-xl">📄</span>, active: false },
    ];

    return (
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-50">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Progress Circle - Centered on mobile */}
                <div className="circle pr-4 border-r border-gray-200">
                    <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center text-white flex-col">
                        <span className="text-2xl">0%</span>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                            In Progress
                        </span>
                    </div>
                </div>

                <div className="flex-1 w-full min-w-0">
                    {/* Steps Indicator - Scrollable on mobile */}
                    <div className="overflow-x-auto pb-4 mb-4 no-scrollbar">
                        <div className="flex items-center justify-between relative min-w-[600px] px-2">
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0" />

                            {steps.map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center gap-3 bg-white px-2">
                                    <div className={`w-12 h-12  rounded-full flex items-center justify-center border-2 transition-all
                                        ${step.active
                                            ? 'bg-[#00d2b4] border-[#00d2b4] text-white shadow-lg shadow-[#00d2b4]/20'
                                            : 'bg-white border-gray-100 text-gray-400'}`}>
                                        {step.icon}
                                    </div>
                                    <span className={`text-[10px] lg:text-xs font-medium whitespace-nowrap ${step.active ? 'text-gray-800' : 'text-gray-400'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                        {details.map((detail, idx) => (
                            <div key={idx} className="flex flex-col gap-1 lg:gap-2">
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                                    {detail.label}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-gray-800">
                                        {detail.label === 'Checklists' ? (
                                            <span className="text-[#00d2b4]">{detail.value}</span>
                                        ) : detail.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanProgressCard;
