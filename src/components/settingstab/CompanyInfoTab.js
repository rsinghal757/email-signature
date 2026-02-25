import React from 'react';
import InputField from '../ui/InputField';

function CompanyInfoTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <InputField id="companyName" name="companyName" label="Company" value={formData.companyName} onChange={handleChange} placeholder="Enter company" />
      <InputField id="webSite" name="webSite" type="url" label="Website" value={formData.webSite} onChange={handleChange} placeholder="https://example.com" helperText="Long URLs wrap in preview automatically." />
      <InputField id="addressLine1" name="addressLine1" label="Address line 1" value={formData.addressLine1} onChange={handleChange} placeholder="Street / office" />
      <InputField id="addressLine2" name="addressLine2" label="Address line 2" value={formData.addressLine2} onChange={handleChange} placeholder="City / region" />
    </div>
  );
}

export default CompanyInfoTab;
