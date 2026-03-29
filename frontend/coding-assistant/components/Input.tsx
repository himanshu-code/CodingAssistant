import React, { InputHTMLAttributes } from 'react';
import { Icon } from './Icon';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
}

export function Input({ label, icon, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="block text-[10px] font-medium uppercase tracking-widest text-outline ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <Icon name={icon} size="md" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
        )}
        <input
          className={`
            w-full rounded-md py-3 px-4 text-sm text-on-surface
            bg-surface-container-high/40 border border-transparent
            placeholder:text-outline/50 outline-none transition-all duration-200
            focus:border-primary focus:shadow-[0_0_0_4px_rgba(92,95,253,0.1)]
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-error focus:border-error focus:shadow-[0_0_0_4px_rgba(255,110,132,0.1)]' : ''}
            ${className ?? ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-error text-xs ml-1">{error}</p>
      )}
    </div>
  );
}

