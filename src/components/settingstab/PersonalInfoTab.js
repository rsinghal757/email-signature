import React from 'react';
import InputField from '../ui/InputField';

function PersonalInfoTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <InputField id="firstName" name="firstName" label="First name" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" />
      <InputField id="lastName" name="lastName" label="Last name" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" />
      <InputField id="jobTitle" name="jobTitle" label="Job title" value={formData.jobTitle} onChange={handleChange} placeholder="Enter job title" />
      <InputField id="email" name="email" type="email" label="Email" value={formData.email} onChange={handleChange} placeholder="Enter email" helperText="Used in preview and copied signature HTML." />
      <InputField id="phoneNumber" name="phoneNumber" type="tel" label="Phone number" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter phone number" />
    </div>
  );
}

export default PersonalInfoTab;
