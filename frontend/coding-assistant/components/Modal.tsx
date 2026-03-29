'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  primaryAction?: { label: string; icon?: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    // Backdrop — surface-dim at 70% + 40px backdrop-blur per design system
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(6, 14, 32, 0.7)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
    >
      {/* Modal container — surface-container-highest, off-center Y per design system */}
      <div
        className="
          relative w-full max-w-md mx-4 rounded-xl
          bg-surface-container-highest border border-outline-variant/20
          shadow-[0_20px_40px_rgba(6,14,32,0.4)]
          -translate-y-[5%]
        "
      >
        {/* Glass overlay shimmer */}
        <div className="glass-panel absolute inset-0 rounded-xl pointer-events-none" />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-primary tracking-tight">{title}</h2>
            <button
              onClick={onClose}
              className="text-outline hover:text-on-surface transition-colors rounded-md p-1 hover:bg-surface-bright"
              aria-label="Close modal"
            >
              <Icon name="close" size="sm" />
            </button>
          </div>

          {/* Body */}
          <div className="text-sm text-on-surface-variant leading-relaxed">
            {children}
          </div>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-3 mt-6">
              {primaryAction && (
                <Button
                  variant="primary"
                  size="sm"
                  leadingIcon={primaryAction.icon}
                  onClick={primaryAction.onClick}
                  className="flex-1"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={secondaryAction.onClick}
                  className="flex-1"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
