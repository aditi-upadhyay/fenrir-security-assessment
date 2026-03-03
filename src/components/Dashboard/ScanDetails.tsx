import React from 'react';
import ScanProgressCard from './ScanProgressCard';
import LiveScanConsole from './LiveScanConsole';
import ScanFooter from './ScanFooter';

const ScanDetails: React.FC = () => {
    return (
        <div className="lg:h-full flex flex-col gap-4">
            <ScanProgressCard />
            <LiveScanConsole />
            <ScanFooter />
        </div>
    );
};

export default ScanDetails;
