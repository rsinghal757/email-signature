import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-ui-lg border border-slate-200 bg-white shadow-card ${className}`}>
      {children}
    </div>
  );
}

export default Card;
