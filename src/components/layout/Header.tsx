import React from 'react';
import { TopBar } from './Header/TopBar';
import { Navbar } from './Header/Navbar';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <TopBar />
            <Navbar />
        </header>
    );
};
