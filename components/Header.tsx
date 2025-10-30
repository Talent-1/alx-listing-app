// components/Header.tsx
import React from 'react';
import Button from './common/Button'; // Import your reusable Button
import { HeaderProps } from '../interfaces'; 
// Import Image from Next.js for optimized asset handling (standard Pages Router practice)
//import Image from 'next/image'; 

export const Header: React.FC<HeaderProps> = ({ userLoggedIn = false }) => {
  return (
    // 1. Fixed positioning and shadow for a typical navbar
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-8 md:px-16 border-b border-gray-100">
      <div className="flex justify-between items-center h-full">
        
        {/* === Left: Logo (Static Placeholder) === */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Placeholder for the logo image */}
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            {/* You would use an actual SVG or image here */}
            
            {/* If using Image component: 
            <Image src="/assets/logo.svg" alt="ALX Logo" layout="fill" objectFit="contain" /> */}
          </div>
          <span className="text-xl font-bold text-indigo-600 hidden sm:inline">
            ALX Listing
          </span>
        </div>

        {/* === Center: Search Bar/Menu === */}
        <div className="flex-grow justify-center hidden md:flex">
          <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-150 p-1">
            <input
              type="text"
              placeholder="Start your search"
              className="px-4 py-1 w-64 text-sm text-gray-600 focus:outline-none bg-transparent"
            />
            {/* Use your Button component for the Search icon */}
            <Button 
              variant="primary" 
              size="sm" 
              className="!rounded-full w-8 h-8 flex items-center justify-center p-0"
              // The '!rounded-full' is a Tailwind override to ensure the Button's default styles don't conflict.
              // NOTE: For icons, you'd integrate an icon library like react-icons.
            >
              🔍
            </Button>
          </div>
        </div>

        {/* === Right: User Actions === */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="md" className="hidden lg:inline text-sm">
            Airbnb your home
          </Button>
          
          {/* Menu Button (Placeholder for avatar/dropdown) */}
          <div className="border border-gray-300 rounded-full flex items-center space-x-2 p-1.5 cursor-pointer hover:shadow-sm transition duration-150">
             {/* Icon Placeholder */}
             <span className="text-gray-500">☰</span>
             {/* Avatar Placeholder */}
             <div className="h-6 w-6 bg-gray-500 rounded-full text-white flex items-center justify-center text-xs">
               {userLoggedIn ? 'U' : 'G'}
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

