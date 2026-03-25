'use client';

import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultOpen?: string;
  onTabChange?: (id: string) => void;
}

export function Tabs({ tabs, defaultOpen, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultOpen || tabs[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    onTabChange?.(id);
  };

  return (
    <div className="flex space-x-8 border-b border-outline-variant/10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              pb-4 font-medium text-sm transition-all duration-200
              ${isActive
                ? 'text-primary border-b-2 border-primary tab-active-glow'
                : 'text-outline hover:text-on-surface border-b-2 border-transparent'
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

