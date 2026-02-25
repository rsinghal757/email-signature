import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-12 md:py-6">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Email Signature Logo" className="h-[48px] w-auto sm:h-[56px] md:h-[64px]" />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
          <span className="hidden text-sm font-medium text-[#101010] text-right md:block">
            Want to support this tool?
          </span>
          <button
            onClick={() => window.open('https://buymeacoffee.com/rohitsinghal', '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 font-medium hover:bg-gray-200 sm:gap-3 sm:px-4 sm:py-3"
          >
            <img src="/assets/buymeacoffeelogo.svg" alt="Buy Me a Coffee" className="h-[20px] w-auto sm:h-[24px]" />
            <span className="text-sm font-medium text-[#101010] text-center sm:text-base">
              <span className="sm:hidden">Support</span>
              <span className="hidden sm:inline">Buy Me A Coffee</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
