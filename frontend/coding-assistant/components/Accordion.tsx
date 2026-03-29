'use client';

import React, { useState, ReactNode } from 'react';
import { Icon } from './Icon';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export function Accordion({ title, children, defaultExpanded = false }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        rounded-lg p-5 cursor-pointer group select-none
        transition-all duration-200 ease-out
        ${isExpanded
          ? 'bg-surface-container-high border-l-4 border-primary shadow-lg'
          : 'bg-surface-container-high hover:bg-surface-container-highest border-l-4 border-transparent'
        }
      `}
    >
      <div className={`flex justify-between items-center ${isExpanded ? 'mb-4' : ''}`}>
        <span
          className={`font-medium text-sm transition-colors ${
            isExpanded ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'
          }`}
        >
          {title}
        </span>
        <Icon
          name="expand_more"
          size="md"
          className={`transition-all duration-200 ${
            isExpanded ? 'text-primary rotate-180' : 'text-outline group-hover:text-primary'
          }`}
        />
      </div>

      {isExpanded && (
        <div className="text-xs text-on-surface-variant leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

