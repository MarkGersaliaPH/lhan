import React, { useState, ReactNode } from 'react';

export default function Tooltip({ content, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        >
        {children}
      </div>
      {showTooltip && <div className="absolute   bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-md py-1 px-2 pointer-events-none transition-all duration-300 z-50">{content}</div>}
    </div>
  );
}
