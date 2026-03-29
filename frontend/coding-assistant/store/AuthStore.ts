import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User, onAuthStateChanged, Unsubscribe } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthState {
    // auth data
    user: User | null;
    isAuthenticated: boolean;
    // loading = true while Firebase is resolving the initial auth state
    loading: boolean;

    // Starts the onAuthStateChanged listener; returns the unsubscribe fn.
    // Call once at app startup (e.g. in a top-level provider/layout).
    initialize: () => Unsubscribe;
}

export const useAuthStore = create<AuthState>()(
    devtools(
        (set) => ({
            user: null,
            isAuthenticated: false,
            loading: true,

            initialize: () =>
                onAuthStateChanged(auth, (firebaseUser) => {
                    set(
                        {
                            user: firebaseUser,
                            isAuthenticated: firebaseUser !== null,
                            loading: false,
                        },
                        false,
                        'auth/onAuthStateChanged'
                    );
                }),
        }),
        { name: 'auth' }
    )
);
