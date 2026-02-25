import React from 'react';

const variants = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-200',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-200',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-200',
};

function Button({ children, className = '', variant = 'primary', ...props }) {
  return (
    <button
      className={`min-h-touch rounded-ui-md px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
