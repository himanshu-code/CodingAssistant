'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/AuthStore';
import Sidebar from '@/components/Sidebar';

export default function ChatLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const { isAuthenticated, loading, initialize } = useAuthStore();

    // Start the Firebase auth listener once; clean up on unmount.
    useEffect(() => {
        const unsubscribe = initialize();
        return unsubscribe;
    }, [initialize]);

    // While Firebase is resolving the initial session, show nothing
    // (avoids flashing the login redirect on a hard refresh).
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#08111f]">
                <svg
                    className="w-8 h-8 animate-spin text-[#5c5ffd]"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Loading…"
                >
                    <circle
                        cx="12" cy="12" r="10"
                        stroke="currentColor" strokeWidth="3"
                        strokeDasharray="31.4" strokeDashoffset="10"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        );
    }

    if (!isAuthenticated) {
        router.push('/login');
        return null;
    }

    return <div className='flex'>
        <div className='w-1/4'>
            <Sidebar />
        </div>
        <div className='w-3/4'>
            {children}
        </div>
    </div>;
}