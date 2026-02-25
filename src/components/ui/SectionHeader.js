import React from 'react';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{title}</h2>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
