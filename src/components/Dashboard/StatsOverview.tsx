import React from 'react';
import { RotateCcw, Ban, AlertTriangle, Search, TrendingUp, TrendingDown } from 'lucide-react';

interface SeverityCardProps {
    label: string;
    count: number;
    trend: string;
    trendType: 'up' | 'down';
    icon: React.ReactNode;
    iconBgColor: string;
    trendColor: string;
}

const SeverityCard: React.FC<SeverityCardProps> = ({
    label,
    count,
    trend,
    trendType,
    icon,
    iconBgColor,
    trendColor,
}) => {
    return (
        <div className="bg-white p-6 flex-1  flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <span className="text-gray-400 text-sm font-medium">{label}</span>
                <div className={`p-2 rounded-xl ${iconBgColor}`}>
                    {icon}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-gray-800">{count}</span>
                <div className={`flex items-center gap-1 text-[10px] font-bold ${trendColor}`}>
                    {trendType === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    <span>{trend}</span>
                </div>
            </div>
        </div>
    );
};

const StatsOverview: React.FC = () => {
    const topStats = [
        { label: 'Org:', value: 'Project X' },
        { label: 'Owner:', value: 'Nammagiri' },
        { label: 'Total Scans:', value: '124' },
        { label: 'Scheduled:', value: '1000' },
        { label: 'Rescans:', value: '45' },
        { label: 'Failed Scans:', value: '12' },
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Top Banner Stats */}
            <div className="flex items-center justify-between   border border-gray-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex items-center gap-8">
                    {topStats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-xs font-medium">{stat.label}</span>
                                <span className="text-gray-800 text-sm font-bold">{stat.value}</span>
                            </div>
                            {index < topStats.length - 1 && (
                                <div className="h-4 w-[1.5px] bg-gray-100" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-gray-400 ml-8">
                    <RotateCcw size={16} className="text-[#00d2b4]" />
                    <span className="text-xs font-medium">10 mins ago</span>
                </div>
            </div>

            {/* Severity Cards */}
            <div className="flex flex-col lg:flex-row gap-6">
                <SeverityCard
                    label="Critical Severity"
                    count={86}
                    trend="+2% increase than yesterday"
                    trendType="up"
                    trendColor="text-pink-500"
                    iconBgColor="bg-pink-100/50"
                    icon={<Ban className="text-pink-500" size={20} />}
                />
                <SeverityCard
                    label="High Severity"
                    count={16}
                    trend="+0.9% increase than yesterday"
                    trendType="up"
                    trendColor="text-pink-500"
                    iconBgColor="bg-orange-100/50"
                    icon={<AlertTriangle className="text-orange-500" size={20} />}
                />
                <SeverityCard
                    label="Medium Severity"
                    count={26}
                    trend="+0.9% decrease than yesterday"
                    trendType="down"
                    trendColor="text-green-500"
                    iconBgColor="bg-yellow-100/50"
                    icon={<AlertTriangle className="text-yellow-600" size={20} />}
                />
                <SeverityCard
                    label="Low Severity"
                    count={16}
                    trend="+0.9% increase than yesterday"
                    trendType="up"
                    trendColor="text-pink-500"
                    iconBgColor="bg-blue-100/50"
                    icon={<Search className="text-blue-500" size={20} />}
                />
            </div>
        </div>
    );
};

export default StatsOverview;
