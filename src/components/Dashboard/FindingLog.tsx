import React from 'react';

interface FindingCardProps {
    severity: 'Critical' | 'High' | 'Medium';
    title: string;
    endpoint: string;
    description: string;
    time: string;
}

const FindingCard: React.FC<FindingCardProps> = ({ severity, title, endpoint, description, time }) => {
    const severityColors = {
        Critical: 'bg-red-500',
        High: 'bg-orange-500',
        Medium: 'bg-yellow-500',
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
                <span className={`${severityColors[severity]} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                    {severity}
                </span>
                <span className="text-gray-300 dark:text-gray-600 text-[10px] font-medium font-mono">{time}</span>
            </div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">{title}</h4>
            <p className="text-[#00d2b4] text-xs font-mono mb-3 truncate">{endpoint}</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed line-clamp-2">{description}</p>
        </div>
    );
};

const FindingLog: React.FC = () => {
    const findings: FindingCardProps[] = [
        {
            severity: 'Critical',
            title: 'SQL Injection in Authentication Endpoint',
            endpoint: '/api/users/profile',
            description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
            time: '10:45:23',
        },
        {
            severity: 'High',
            title: 'Unauthorized Access to User Metadata',
            endpoint: '/api/auth/login',
            description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
            time: '10:45:23',
        },
        {
            severity: 'Medium',
            title: 'Broken Authentication Rate Limiting',
            endpoint: '/api/search',
            description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
            time: '10:45:23',
        },
    ];

    return (
        <div className="w-full lg:w-96 flex-1 lg:flex-none space-y-4 overflow-y-auto pr-2 custom-scrollbar lg:min-h-0">
            <h3 className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest px-1">Finding Log</h3>
            <div className="space-y-4 pb-4">
                {findings.map((finding, idx) => (
                    <FindingCard key={idx} {...finding} />
                ))}
            </div>
        </div>
    );
};

export default FindingLog;
