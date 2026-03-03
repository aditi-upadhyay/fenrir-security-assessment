import React from 'react';

const ActivityLog: React.FC = () => {
    const logs = [
        { time: '09:00:00', text: "I'll begin a systematic penetration test on 'helpdesk.democorp.com'. Let me start with reconnaissance and enumeration. ", link: 'helpdesk.democorp.com' },
        { time: '09:01:00', text: 'Good! target is online. Now let me perform port scanning to identify running services.' },
        { time: '09:02:00', text: 'Excellent reconnaissance results:', },
        { time: '', text: '- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)', isIndent: true },
        { time: '', text: 'Let me probe the web server on target first to understand its structure.', isIndent: true },
        { time: '09:03:00', text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: ', code: '"TODO: Delete the testing account (test:test)"', text2: '. Let me test this credential. The login redirects to ', badge: '/password/test', text3: '. Let me follow that path and explore it.' },
        { time: '09:04:00', text: 'The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ', code: "'#'", text2: ' which means the current page. Let me try a different approach.' },
        { time: '09:05:00', text: 'It redirects back to /password/test. Let me check if there\'s an /api endpoint or look for other paths. Let me also try exploring with the ', code: 'test:test', text2: ' password directly on other endpoints.' },
        { time: '09:06:00', text: 'Great! I can access the dashboard using the ', code: "'X-UserId: 10032'", text2: ' header. The dashboard shows "Welcome, John Doe". This suggests an ', bold: '**IDOR vulnerability**', text3: ' - I can access any user\'s dashboard by just changing the X-UserId header. Let me explore more of the application...' },
    ];

    return (
        <div className="flex-1 min-w-0 font-mono text-[10px] lg:text-sm leading-relaxed text-gray-500 dark:text-gray-400 overflow-y-auto pr-2 lg:pr-4 custom-scrollbar transition-colors duration-300">
            <div className="space-y-3 lg:space-y-4">
                {logs.map((log, idx) => (
                    <div key={idx} className={`${log.isIndent ? 'ml-4 lg:ml-8' : ''} break-words`}>
                        {log.time && <span className="text-gray-300 dark:text-gray-600 mr-2 lg:mr-4 text-[10px]">[{log.time}]</span>}
                        <span className="text-[12px] dark:text-gray-300">{log.text}</span>
                        {log.code && <span className="bg-gray-100 dark:bg-gray-800 px-1 lg:px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 mx-0.5 lg:mx-1 border border-gray-200 dark:border-gray-700 text-[12px]">{log.code}</span>}
                        {log.badge && <span className="bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 px-1.5 lg:px-2 py-0.5 rounded-full text-[8px] lg:text-xs mx-0.5 lg:mx-1 inline-block text-[12px]">{log.badge}</span>}
                        {log.text2 && <span className="text-[12px] dark:text-gray-300">{log.text2}</span>}
                        {log.text3 && <span className="text-[12px] dark:text-gray-300">{log.text3}</span>}
                        {log.bold && <span className="text-red-500 font-bold mx-0.5 lg:mx-1" dangerouslySetInnerHTML={{ __html: log.bold.replace(/\*\*(.*?)\*\*/g, '$1') }}></span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;
