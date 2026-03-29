import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'critical' | 'warning' | 'stable' | 'language' | 'outline' | 'chip';
}

export function Badge({ label, variant = 'chip' }: BadgeProps) {
  const variants: Record<string, string> = {
    // Status — high urgency, uses primary (indigo)
    critical: "bg-primary text-on-primary font-bold rounded-full",
    // Status — warning, uses surface-bright container
    warning: "bg-surface-bright text-on-surface border border-outline-variant/30 rounded-full",
    // Status — stable, muted
    stable: "bg-surface-container-lowest text-outline border border-outline-variant/10 rounded-full",
    // Language tag — primary accent with ghost border
    language: "bg-surface-container text-primary border border-primary/20 font-mono rounded",
    // Generic outline
    outline: "bg-surface-container text-on-surface-variant border border-outline-variant/10 font-mono rounded",
    // Chip — uses secondary-container per design system spec
    chip: "bg-secondary-container text-on-secondary-container font-medium rounded-full",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] ${variants[variant]}`}>
      {label}
    </span>
  );
}

