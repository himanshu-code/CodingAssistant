import React from 'react'
import { Icon } from './Icon'
export interface ButtonProps {
    icon: string;
    label: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
    size: 'sm' | 'md' | 'lg';
    loading?: boolean;
    onClick?: () => void;
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
const ButtonIcon = ({ icon, variant, size, className, ...props }: ButtonProps) => {
    return (
        <button aria-label={props.label} className={`${variant ? variantStyles[variant] : variantStyles['primary']} ${sizeStyles[size]} ${className}`} {...props}><Icon name={icon} /></button>
    )
}

export default ButtonIcon