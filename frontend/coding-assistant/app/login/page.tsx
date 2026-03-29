'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../../components/Icon';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      // signInWithPopup triggers onAuthStateChanged, which updates the store.
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push('/chat');
    } catch (err) {
      console.error('Google sign-in failed:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    /* ── Page shell ── */
    <div className="min-h-screen flex flex-col bg-[#08111f]">

      {/* ── Subtle noise / grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(163,166,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,166,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Faint top glow ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 30% at 50% -5%, rgba(92,95,253,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-16">

        {/* ── Auth card ── */}
        <div
          className="w-full max-w-[480px] rounded-2xl overflow-hidden"
          style={{
            background: '#0c1628',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          }}
        >

          {/* ── Card top bar ── */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: '#8b93aa' }}
            >
              Obsidian Architect
            </span>
            <button
              aria-label="Help"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#6d758c' }}
            >
              <Icon name="help_outline" size="sm" />
            </button>
          </div>

          {/* ── Card body ── */}
          <div className="px-8 py-10 flex flex-col items-center">

            {/* Logo mark */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 select-none"
              style={{
                background: 'linear-gradient(135deg, #4b4dd8 0%, #6e71f5 50%, #a3a6ff 100%)',
                boxShadow: '0 6px 28px rgba(75,77,216,0.45)',
              }}
            >
              {/* Custom square-bracket icon matching Stitch */}
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden>
                <path
                  d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1
              className="text-2xl font-bold tracking-tight text-white mb-2 select-none"
            >
              DevMate AI
            </h1>
            <p className="text-sm mb-8 select-none" style={{ color: '#8b93aa' }}>
              Welcome back. Log in to your developer workspace.
            </p>

            {/* ── Google SSO button ── */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-lg text-sm font-semibold bg-white text-[#1a1a2e] transition-all duration-200 hover:bg-[#f0f0f8] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
            >
              {loading ? (
                /* Spinner */
                <svg className="w-5 h-5 animate-spin text-[#4b4dd8]" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" />
                </svg>
              ) : (
                /* Google logo */
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              )}
              {loading ? 'Authenticating…' : 'Continue with Google'}
            </button>

            {/* Authorized access label */}
            <p
              className="mt-4 text-[10px] font-semibold tracking-[0.2em] uppercase select-none"
              style={{ color: '#40485d' }}
            >
              Authorized Access Only
            </p>

            {/* ── MFA disclaimer ── */}
            <div className="mt-6 flex gap-2.5 items-start w-full">
              <div className="mt-0.5 shrink-0" style={{ color: '#40485d' }}>
                <Icon name="info" size="sm" />
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: '#40485d' }}>
                By continuing, you are accessing the secure Obsidian cluster. Multi-factor
                authentication may be required for specific deployments.
              </p>
            </div>

            {/* ── In-card footer links ── */}
            <div
              className="mt-8 pt-6 w-full flex items-center justify-center gap-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {['Privacy', 'Terms', 'Docs'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="text-[11px] font-medium tracking-widest uppercase transition-colors hover:text-[#a3a6ff]"
                  style={{ color: '#40485d' }}
                >
                  {label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Page-level footer ── */}
      <footer
        className="relative z-10 flex items-center justify-between px-8 py-4 text-[10px] font-medium tracking-widest uppercase"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          color: '#2e3650',
        }}
      >
        <span>© 2024 Obsidian Architect. Terminal-Grade Precision.</span>
        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Docs'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="transition-colors hover:text-[#6d758c]"
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>

    </div>
  );
}
