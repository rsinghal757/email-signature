import React from 'react';

function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-ui-lg bg-slate-100 p-1 sm:grid-cols-3 lg:grid-cols-5">
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(index)}
          className={`min-h-touch rounded-ui-md px-3 py-2 text-xs font-semibold sm:text-sm ${
            value === index ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white/70'
          }`}
        >
          <span className="line-clamp-2 text-center">{option}</span>
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;
