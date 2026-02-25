import React from 'react';
import InputField from '../ui/InputField';

function GraphicsTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <InputField id="photoURL" name="photoURL" type="url" label="Photo URL" value={formData.photoURL} onChange={handleChange} placeholder="https://..." />
      <InputField id="bannerURL1" name="bannerURL1" type="url" label="Banner 1 URL" value={formData.bannerURL1} onChange={handleChange} placeholder="https://..." />
      <InputField id="bannerURL2" name="bannerURL2" type="url" label="Banner 2 URL" value={formData.bannerURL2} onChange={handleChange} placeholder="https://..." />
      <InputField id="bannerURL3" name="bannerURL3" type="url" label="Banner 3 URL" value={formData.bannerURL3} onChange={handleChange} placeholder="https://..." />
    </div>
  );
}

export default GraphicsTab;
