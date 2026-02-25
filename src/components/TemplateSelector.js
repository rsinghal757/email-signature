import React, { useState, useEffect } from 'react';
import SignaturePreview from '../components/SignaturePreview';

const dummyData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  jobTitle: 'Software Engineer',
  phoneNumber: '+1-234-567-890',
  companyName: 'Example Corp',
  webSite: 'https://www.example.com',
  addressLine1: '123 Main St',
  addressLine2: 'Apt 456',
  photoURL: 'https://via.placeholder.com/150',
  bannerURL1: 'https://via.placeholder.com/600x100',
  bannerURL2: 'https://via.placeholder.com/600x100',
  bannerURL3: 'https://via.placeholder.com/600x100',
  fontName: 'Arial',
  colorOne: '#000000',
  colorTwo: '#ffffff',
  colorThree: '#0000ff',
  facebookURL: 'https://www.facebook.com/johndoe',
  twitterURL: 'https://www.twitter.com/johndoe',
  linkedinURL: 'https://www.linkedin.com/in/johndoe',
  youtubeURL: 'https://www.youtube.com/johndoe',
  githubURL: 'https://www.github.com/johndoe',
};

function TemplateSelector({ onSelect, selectedTemplateId = null }) {
  const [templates, setTemplates] = useState({});

  useEffect(() => {
    const templateCount = 12;
    const templatePromises = [];

    for (let i = 1; i <= templateCount; i++) {
      templatePromises.push(fetch(`/templates/template_${i}.txt`).then(res => res.text()));
    }

    Promise.all(templatePromises)
      .then(htmlContents => {
        const newTemplates = {};
        htmlContents.forEach((htmlContent, index) => {
          newTemplates[`template_${index + 1}`] = {
            id: `template_${index + 1}`,
            htmlContent,
            fileUrl: `/templates/template_${index + 1}.txt`
          };
        });
        setTemplates(newTemplates);
      })
      .catch(error => console.error('Error loading templates:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-base font-semibold mb-6">Select a template</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {Object.entries(templates).map(([templateId, template]) => (
          <button
            key={templateId}
            type="button"
            className={`group w-full min-h-[220px] sm:min-h-[250px] aspect-[16/9] p-3 sm:p-5 overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all flex items-start justify-start focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 hover:shadow-md ${
              selectedTemplateId === templateId
                ? 'border-sky-500 ring-2 ring-sky-200'
                : 'border-slate-200 hover:border-slate-300'
            }`}
            onClick={() => onSelect(template)}
          >
            <div className="w-full h-full overflow-hidden rounded-lg border border-slate-100 bg-slate-50/70">
              <div className="origin-top-left scale-[0.44] sm:scale-[0.5] lg:scale-[0.54]">
                <SignaturePreview
                  template={template}
                  formData={dummyData}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
