import React from 'react';
import { Icon } from './Icon';

interface HeaderProps {
  brand?: string;
  navItems?: { label: string; href: string; isActive?: boolean }[];
}

export function Header({ brand = "DevMate AI", navItems }: HeaderProps) {
  const defaultNav = [
    { label: "Chat", href: "#", isActive: true },
    { label: "Components", href: "#" },
    { label: "Docs", href: "#" },
  ];
  const items = navItems ?? defaultNav;

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glassmorphic navbar — surface at 80% opacity + 20px blur per design system */}
      <div
        className="flex justify-between items-center px-8 h-16 w-full"
        style={{
          background: 'rgba(6, 14, 32, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(64, 72, 93, 0.15)',
        }}
      >
        {/* Brand */}
        <div className="text-xl font-bold tracking-tighter text-primary">
          {brand}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.isActive
                  ? "text-primary border-b-2 border-primary tab-active-glow text-sm tracking-tight px-1 py-5"
                  : "text-outline hover:text-on-surface hover:bg-surface-container transition-colors duration-200 text-sm tracking-tight px-3 py-2 rounded-md"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-outline hover:text-on-surface transition-colors p-1 rounded-md hover:bg-surface-container" aria-label="Notifications">
            <Icon name="notifications" size="md" />
          </button>
          <button className="text-outline hover:text-on-surface transition-colors p-1 rounded-md hover:bg-surface-container" aria-label="Settings">
            <Icon name="settings" size="md" />
          </button>
          {/* Avatar */}
          <div
            className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center"
            title="Alex Developer"
          >
            <span className="text-on-secondary-container text-xs font-bold">AD</span>
          </div>
        </div>
      </div>
    </header>
  );
}

