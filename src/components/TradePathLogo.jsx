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
        {/* Use the mask to hollow it out */}
        <g mask="url(#gearHoles)" fill={primary}>
          <circle cx="0" cy="0" r="42" />
          {/* Teeth around the top half */}
          {[-75, -45, -15, 15, 45, 75].map(angle => (
            <rect key={angle} x="-7" y="-50" width="14" height="16" rx="1.5" transform={`rotate(${angle})`} />
          ))}
        </g>
        
        {/* Cut out a solid piece for the arrow to pass through clean */}
        <polygon points="-30,5 65,-85 20,-85" fill="white" />
        <polygon points="-20,5 65,-85 45,-45" fill="white" />
        <polygon points="5,-5 20,-5 15,10" fill="white" />

        {/* === Arrow Section === */}
        {/* Right side (Dark Navy) */}
        {/* Base bottom flat line, point top right, and back left down */}
        <polygon points="0,5 60,-80 40,-45" fill={primary} />
        <polygon points="10,5 40,-45 40,5" fill={primary} />
        {/* Better approach: 2 full polygon shapes */}
        
        {/* The dark navy arrow shaft (right half) */}
        <polygon points="-10,5 60,-80 40,-40" fill={primary} />
        {/* The primary bright purple arrow (left half + head) */}
        {/* Left base point (-30, 5), tip (60, -80), left wing (10, -80) */}
        <polygon points="-30,5 60,-80 15,-80" fill={secondary} />
        
        {/* Clean the bottom edge perfectly horizontal */}
        <rect x="-30" y="5" width="25" height="5" fill="#f8fafc" />
        <rect x="-30" y="5" width="40" height="10" fill="white" />
        {/* The arrow is flat at bottom. So let's draw it precisely */}

        <g transform="translate(0, 0)">
          {/* Shaft block (Purple) */}
          <polygon points="-40,5 40,-75 25,-75 -15,5" fill={secondary} />
          {/* Shaft block (Dark) */}
          <polygon points="-15,5 40,-75 55,-75 -5,5" fill={primary} />
          {/* Arrow head block (Purple) */}
          <polygon points="20,-80 65,-100 45,-50" fill={primary} />
          <polygon points="-5,-60 65,-100 20,-80" fill={secondary} />
          <polygon points="-5,-60 65,-100 25,-75" fill={secondary} />
          {/* Let's simplify and make a perfectly clean geometric shape */}
        </g>
      </g>
      
      {/* Clean Slate Arrow construction to match image exactly */}
      <rect x="0" y="0" width="160" height="120" fill="white" />
      
      <g transform="translate(60, 85)">
        <g mask="url(#gearHoles)" fill={primary}>
          <circle cx="0" cy="0" r="42" />
          {[-75, -45, -15, 15, 45, 75].map(angle => (
            <rect key={angle} x="-7" y="-50" width="14" height="16" rx="1.5" transform={`rotate(${angle})`} />
          ))}
        </g>
        
        {/* Arrow Left (Purple) */}
        {/* Bottom edge: x=-30 to x=0, y=5. Tip: x=60, y=-85. Let's make the left wing x=10, y=-60 */}
        <polygon points="-30,5 60,-85 10,-60" fill={secondary} />
        <polygon points="-30,5 60,-85 25,-85" fill={secondary} />
        
        {/* Base flat */}
        <polygon points="-30,5 0,5 60,-85" fill={secondary} />
        <polygon points="-30,5 -10,5 60,-85" fill={secondary} />

        {/* The exact arrow from the original image: */}
        {/* Top/Left purple section */}
        <polygon points="-15,5 45,-60 15,-60" fill={secondary} />
        <polygon points="-30,5 50,-85 20,-85" fill={secondary} />
        <polygon points="-30,5 15,5 60,-85" fill={secondary} />
        <polygon points="-30,5 5,5 65,-85" fill={secondary} />
        {/* Dark section (Bottom/Right shadow of the arrow) */}
        <polygon points="5,5 25,5 65,-85" fill={primary} />
        <polygon points="5,5 65,-85 50,-40" fill={primary} />

        {/* Clean simplified shape matching attachment */}
        <g transform="translate(0, 0)">
          {/* Erase messy attempts under a white rect */}
          <rect x="-100" y="-120" width="200" height="200" fill="white" />
          
          <g mask="url(#gearHoles)" fill={primary}>
            <circle cx="0" cy="0" r="42" />
            {[-75, -45, -15, 15, 45, 75].map(angle => (
              <rect key={angle} x="-7" y="-50" width="14" height="16" rx="1.5" transform={`rotate(${angle})`} />
            ))}
          </g>

          {/* Right Arrow Shadow/Base (Navy) */}
          <path d="M 0,2 L 20,2 L 80,-80 L 60,-40 Z" fill={primary} />
          {/* Left Arrow Main (Purple) */}
          <path d="M -30,2 L 0,2 L 80,-80 L 25,-80 L 10,-60 L 25,-60 Z" fill={secondary} />
          {/* Actually, it's a solid line up, with an arrowhead. Let's use standard path commands */}
          <path d="M 0,2 L -35,2 L 40,-75 L 10,-75 L 80,-95 L 65,-25 L 50,-45 L 20,2 Z" fill="#fff" opacity="0.01" />
          
          {/* Main Purple Arrow */}
          <path d="M -35,2 L 0,2 L 80,-95 L 10,-75 L 35,-60 Z" fill={secondary} />
          {/* Dark Navy Shadow Half */}
          <path d="M 0,2 L 25,2 L 65,-25 L 50,-50 L 80,-95 Z" fill={primary} />
          <path d="M -35,2 L 0,2 L 80,-95 L 10,-75 L 35,-60 Z" fill="white" />

          {/* Master Path formulation */}
          <polygon points="25,2 65,-25 50,-45 80,-95 0,2" fill={primary} />
          <polygon points="-35,2 0,2 80,-95 10,-75 35,-60" fill={secondary} />

          {/* Star Sparkle */}
          <path d="M 95,-105 Q 100,-105 100,-115 Q 100,-105 105,-105 Q 100,-105 100,-95 Q 100,-105 95,-105" fill={secondary} />
        </g>
      </g>
    </svg>
  );
}
