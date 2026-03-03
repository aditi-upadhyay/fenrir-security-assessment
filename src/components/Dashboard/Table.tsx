import React from 'react';

interface Scan {
    id: string;
    name: string;
    type: string;
    status: 'Completed' | 'Scheduled' | 'Failed';
    progress: number;
    vulnerability: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    lastScan: string;
}

const scans: Scan[] = [
    { id: '1', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '2', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '3', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '4', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '5', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '6', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '7', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerability: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: '8', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerability: { critical: 0, high: 5, medium: 12, low: 0 }, lastScan: '4d ago' },
    { id: '9', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerability: { critical: 0, high: 5, medium: 12, low: 0 }, lastScan: '4d ago' },
    { id: '10', name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulnerability: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: '3d ago' },
    { id: '11', name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulnerability: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: '3d ago' },
];

const StatusBadge: React.FC<{ status: Scan['status'] }> = ({ status }) => {
    const styles = {
        Completed: 'bg-green-50 text-green-600 border-green-100',
        Scheduled: 'bg-blue-50 text-blue-600 border-blue-100',
        Failed: 'bg-red-50 text-red-600 border-red-100',
    };

    return (
        <span className={`px-3 py-1 rounded-md text-xs font-semibold border ${styles[status]}`}>
            {status}
        </span>
    );
};

const VulnerabilityBadges: React.FC<{ vulnerability: Scan['vulnerability'] }> = ({ vulnerability }) => {
    return (
        <div className="flex gap-1.5">
            {vulnerability.critical > 0 && (
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#EF4444] text-white text-[10px] font-bold shadow-sm">
                    {vulnerability.critical}
                </span>
            )}
            {vulnerability.high > 0 && (
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F97316] text-white text-[10px] font-bold shadow-sm">
                    {vulnerability.high}
                </span>
            )}
            {vulnerability.medium > 0 && (
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FBBF24] text-white text-[10px] font-bold shadow-sm">
                    {vulnerability.medium}
                </span>
            )}
            {vulnerability.low > 0 && (
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#10B981] text-white text-[10px] font-bold shadow-sm">
                    {vulnerability.low}
                </span>
            )}
        </div>
    );
};

const Table: React.FC = () => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                    <tr className="border-b border-gray-100">
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider pl-2">Scan Name</th>
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider pr-12">Type</th>
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider pr-12">Status</th>
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider pr-12">Progress</th>
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider pr-12">Vulnerability</th>
                        <th className="pb-4 pt-2 text-xs font-medium text-gray-400 uppercase tracking-wider text-right pr-2">Last Scan</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {scans.map((scan) => (
                        <tr key={scan.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="py-5 pl-2">
                                <span className="text-sm font-bold text-gray-700">{scan.name}</span>
                            </td>
                            <td className="py-5">
                                <span className="text-sm font-medium text-gray-500">{scan.type}</span>
                            </td>
                            <td className="py-5">
                                <StatusBadge status={scan.status} />
                            </td>
                            <td className="py-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${scan.status === 'Failed' ? 'bg-red-400' : 'bg-[#00d2b4]'}`}
                                            style={{ width: `${scan.progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-600">{scan.progress}%</span>
                                </div>
                            </td>
                            <td className="py-5">
                                <VulnerabilityBadges vulnerability={scan.vulnerability} />
                            </td>
                            <td className="py-5 text-right pr-2">
                                <span className="text-xs font-medium text-gray-400">{scan.lastScan}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
