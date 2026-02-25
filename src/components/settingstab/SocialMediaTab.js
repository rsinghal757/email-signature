import React from 'react';
import InputField from '../ui/InputField';

function SocialMediaTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <InputField id="facebookURL" name="facebookURL" type="url" label="Facebook" value={formData.facebookURL} onChange={handleChange} placeholder="https://facebook.com/..." />
      <InputField id="twitterURL" name="twitterURL" type="url" label="Twitter / X" value={formData.twitterURL} onChange={handleChange} placeholder="https://x.com/..." />
      <InputField id="linkedinURL" name="linkedinURL" type="url" label="LinkedIn" value={formData.linkedinURL} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
      <InputField id="youtubeURL" name="youtubeURL" type="url" label="YouTube" value={formData.youtubeURL} onChange={handleChange} placeholder="https://youtube.com/..." />
      <InputField id="githubURL" name="githubURL" type="url" label="GitHub" value={formData.githubURL} onChange={handleChange} placeholder="https://github.com/..." />
    </div>
  );
}

export default SocialMediaTab;
