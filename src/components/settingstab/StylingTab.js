import React from 'react';
import InputField from '../ui/InputField';

function StylingTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <InputField id="fontName" name="fontName" label="Font family" value={formData.fontName} onChange={handleChange} placeholder="Arial, sans-serif" />
      <InputField id="colorOne" name="colorOne" label="Primary color" value={formData.colorOne} onChange={handleChange} placeholder="#111827" />
      <InputField id="colorTwo" name="colorTwo" label="Secondary color" value={formData.colorTwo} onChange={handleChange} placeholder="#475569" />
      <InputField id="colorThree" name="colorThree" label="Accent color" value={formData.colorThree} onChange={handleChange} placeholder="#e43349" />
    </div>
  );
}

export default StylingTab;
