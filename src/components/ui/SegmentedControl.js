import React from 'react';
function SegmentedControl({ options, value, onChange }) {
  return <div className="editor-tabs" aria-label="Signature details">{options.map((option, index) => <button key={option} type="button" onClick={() => onChange(index)} aria-pressed={value === index} className={value === index ? 'active' : ''}>{option}</button>)}</div>;
}
export default SegmentedControl;
