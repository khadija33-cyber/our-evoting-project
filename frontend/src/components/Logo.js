import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'default' }) => {
  // Different size classes based on the size prop
  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-12 w-12'
  };

  return (
    <Link to="/accueil" className="flex items-center gap-2 group">
      <div className={`${sizeClasses[size] || sizeClasses.default} relative`}>
        {/* Logo SVG with animation */}
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-all duration-500 group-hover:rotate-[-5deg]"
        >
          {/* Outer Circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="#1e40af" 
            className="transition-all duration-500 group-hover:fill-blue-700"
          />
          
          {/* Inner Circle - Ballot Circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="35" 
            fill="#ffffff" 
            className="transition-all duration-300"
          />
          
          {/* Ballot Box Slot */}
          <rect 
            x="35" 
            y="30" 
            width="30" 
            height="5" 
            fill="#1e40af" 
            className="transition-all duration-500 group-hover:fill-blue-500"
          />
          
          {/* Ballot Paper */}
          <rect 
            x="42" 
            y="20" 
            width="16" 
            height="30" 
            fill="#f8fafc" 
            stroke="#1e40af" 
            strokeWidth="1.5" 
            className="transition-all duration-500 origin-top group-hover:translate-y-[5px]" 
          />
          
          {/* Checkmark on Ballot */}
          <path 
            d="M45,35 L50,40 L58,30" 
            stroke="#1e40af" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:stroke-green-600"
          />
          
          {/* SecretVote Text - Inner Arc */}
          <path
            id="textPath"
            d="M50,85 a35,35 0 0,1 0,-70 a35,35 0 0,1 0,70"
            fill="none"
            stroke="none"
          />
          <text fontSize="9" fontFamily="Arial" fontWeight="bold" fill="#1e40af" className="transition-all duration-500 group-hover:fill-blue-700">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              SECRET VOTE
            </textPath>
          </text>
        </svg>

        {/* Pulse animation circles on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-75 group-hover:animate-ping bg-blue-300 scale-75"></div>
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping animation-delay-300 bg-blue-400 scale-110"></div>
      </div>
      <span className="text-2xl font-bold text-white">SecretVote</span>
    </Link>
  );
};

export default Logo;