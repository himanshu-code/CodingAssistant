import React from 'react';
import { Icon } from './Icon';

type NavItem = {
  icon: string;
  label: string;
  isActive?: boolean;
};

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <nav className="fixed bottom-0 left-0 w-full h-14 flex justify-around items-center z-50 px-12 bg-background/80 backdrop-blur-xl border-t border-outline-variant/15 shadow-[0_-10px_30px_rgba(6,14,32,0.5)]">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center justify-center cursor-pointer transition-all ${
              item.isActive ? 'text-primary scale-110' : 'text-slate-500 opacity-60 hover:opacity-100 hover:text-slate-300'
            }`}
          >
            <Icon name={item.icon} size="md" className="" />
            <span className="font-sans text-[9px] uppercase tracking-widest mt-0.5">
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
