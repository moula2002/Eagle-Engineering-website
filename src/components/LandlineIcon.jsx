import React from 'react';

/**
 * LandlineIcon - Clean vector outline icon matching Lucide icons design system
 * Features a classic desk landline telephone with handset, cradle, dial pad, and signal waves.
 */
export const LandlineIcon = ({ className = "w-4 h-4", strokeWidth = 2, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Signal / Ringing wave arcs above handset (Triangle Squad style) */}
      <path d="M10 2.5a3 3 0 0 1 4 0" />
      <path d="M8 4.5a6 6 0 0 1 8 0" />

      {/* Telephone Handset */}
      <path d="M4 8.5h16a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v.5a1 1 0 0 0 1 1z" />
      <path d="M3 7.5v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M17 7.5v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />

      {/* Base Body */}
      <path d="M5.5 11.5h13l1.3 7.5a1.5 1.5 0 0 1-1.5 1.8H5.7a1.5 1.5 0 0 1-1.5-1.8l1.3-7.5z" />

      {/* Rotary Dial / Keypad Center */}
      <circle cx="12" cy="16.2" r="2.3" />
      <circle cx="12" cy="16.2" r="0.6" fill="currentColor" />
    </svg>
  );
};

export default LandlineIcon;
