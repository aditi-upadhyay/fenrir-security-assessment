import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './sideBar/SideBar';
import Navbar from './Navbar';

const Layout: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-50/30">
            <SideBar />

            <main className="flex-1 h-screen overflow-hidden flex flex-col">
                <Navbar />
                <div className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
