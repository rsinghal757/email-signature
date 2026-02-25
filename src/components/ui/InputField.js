import React from 'react';

function InputField({ label, helperText, id, error, className = '', ...props }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className={`min-h-touch w-full rounded-ui-md border bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
          error ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-300 focus:border-brand-400 focus:ring-brand-100'
        } ${className}`}
        {...props}
      />
      {(helperText || error) && (
        <p className={`text-xs ${error ? 'text-red-600' : 'text-slate-500'} break-words`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}

export default InputField;
