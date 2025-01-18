import Navbar from '@/components/Navbar';
import { ThemeState, useThemeStore } from '@/store/themeStore';
import React from 'react';
import { useAuthStore } from '@/store/authStore';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDarkTheme = useThemeStore((state: ThemeState) => state.isDarkTheme);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return (
        <div className={`relative`}> 
            <div className='min-h-screen mx-auto relative'>
            <Navbar />

            <main className={`px-4 overflow-auto flex justify-center`}>
                {children}
            </main>
            <footer className=''>
            </footer>
            </div>
        </div>
    );
};

export default DefaultLayout;