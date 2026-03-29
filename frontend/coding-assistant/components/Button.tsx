import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

// Button variants from the Indigo Syntax / Obsidian Architect design system:
// - primary: gradient fill indigo, for main CTAs
// - secondary: ghost (outline) style
// - tertiary: text-only, high-energy actions (e.g. "Run Code")
// - destructive: error-colored for dangerous actions

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  leadingIcon?: string;
  trailingIcon?: string;
  children: ReactNode;
  loading?: boolean;
}

const variantStyles = {
  primary: `
    bg-gradient-to-br from-primary to-primary-container
    text-on-primary font-semibold
    hover:opacity-90 active:scale-[0.98]
    shadow-[0_4px_24px_rgba(69,70,231,0.25)]
  `,
  secondary: `
    bg-transparent border border-outline/20
    text-color-on-background font-medium
    hover:bg-surface-bright
    active:scale-[0.98]
  `,
  tertiary: `
    bg-transparent border-none
    text-secondary font-medium
    hover:bg-surface-container
    active:scale-[0.98]
  `,
  destructive: `
    bg-error-container border border-error/20
    text-on-error-container font-semibold
    hover:opacity-90 active:scale-[0.98]
  `,
};

const sizeStyles = {
  sm: 'py-2 px-4 text-xs rounded-md gap-1.5',
  md: 'py-3 px-6 text-sm rounded-md gap-2',
  lg: 'py-4 px-8 text-base rounded-md gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  loading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-sans
        transition-all duration-200 select-none
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Icon name="progress_activity" className="animate-spin text-current" size="sm" />
      ) : leadingIcon ? (
        <Icon name={leadingIcon} className="text-current" size="sm" />
      ) : null}
      {children}
      {trailingIcon && !loading && (
        <Icon name={trailingIcon} className="text-current" size="sm" />
      )}
    </button>
  );
}
