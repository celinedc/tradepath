import React from 'react';

export default function TradePathLogo({ className = "w-8 h-8", light = false }) {
  // Matched exactly to the attached image color palette
  const primary = light ? "#FFFFFF" : "#1f1b3d"; // Dark Navy base
  const secondary = light ? "#818CF8" : "#4A45E5"; // Brilliant Purple/Blue

  return (
    <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
      <defs>
        {/* Mask to cut out the inner hole of the gear and its bottom half */}
        <mask id="gearHoles">
          <rect x="-100" y="-100" width="200" height="200" fill="white" />
          <circle cx="0" cy="0" r="28" fill="black" />
          <circle cx="0" cy="0" r="23" fill="white" />
          <rect x="-100" y="0" width="200" height="100" fill="black" />
        </mask>
      </defs>
      
      <g transform="translate(60, 85)">
        {/* === Gear Section === */}
        <g mask="url(#gearHoles)" fill={primary}>
          <circle cx="0" cy="0" r="42" />
          {[-75, -45, -15, 15, 45, 75].map(angle => (
            <rect key={angle} x="-7" y="-50" width="14" height="16" rx="1.5" transform={`rotate(${angle})`} />
          ))}
        </g>

        {/* === Arrow Section === */}
        {/* Right Arrow Shadow/Base (Navy) */}
        <polygon points="25,2 65,-25 50,-45 80,-95 0,2" fill={primary} />
        
        {/* Main Purple Arrow */}
        <polygon points="-35,2 0,2 80,-95 10,-75 35,-60" fill={secondary} />

        {/* Star Sparkle */}
        <path d="M 95,-105 Q 100,-105 100,-115 Q 100,-105 105,-105 Q 100,-105 100,-95 Q 100,-105 95,-105" fill={secondary} />
      </g>
    </svg>
  );
}
