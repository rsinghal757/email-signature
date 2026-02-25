import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-fluid py-3 sm:py-4">
        <Link to="/" className="shrink-0">
          <img src="/assets/logo.svg" alt="Email Signature Logo" className="h-10 w-auto sm:h-12" />
        </Link>
        <div className="min-w-0 text-right">
          <p className="hidden text-xs text-slate-500 sm:block">Support this free tool</p>
          <Button
            variant="secondary"
            className="mt-0 sm:mt-1"
            onClick={() => window.open('https://buymeacoffee.com/rohitsinghal', '_blank', 'noopener,noreferrer')}
          >
            <span className="inline-flex items-center gap-2">
              <img src="/assets/buymeacoffeelogo.svg" alt="Buy Me a Coffee" className="h-4 w-auto" />
              <span className="max-w-[120px] text-wrap">Buy Me A Coffee</span>
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
