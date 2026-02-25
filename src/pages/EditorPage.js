import React, { useState } from 'react';
import TemplateSelector from '../components/TemplateSelector';
import Editor from '../components/Editor';
import SignaturePreview from '../components/SignaturePreview';
import CopyButton from '../components/CopyButton';

function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    companyName: '',
    webSite: '',
    addressLine1: '',
    addressLine2: '',
    photoURL: '',
    bannerURL1: '',
    bannerURL2: '',
    bannerURL3: '',
    fontName: '',
    colorOne: '',
    colorTwo: '',
    colorThree: '',
    facebookURL: '',
    twitterURL: '',
    linkedinURL: '',
    youtubeURL: '',
    githubURL: '',
  });
  const [signatureHtml, setSignatureHtml] = useState('');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-4 sm:px-6 md:px-12">
      {selectedTemplate === null ? (
        <TemplateSelector
          onSelect={handleTemplateSelect}
          selectedTemplateId={selectedTemplate?.id}
        />
      ) : (
        <div className="mx-auto flex w-full flex-col gap-8 py-6 xl:flex-row xl:items-start xl:justify-between xl:gap-24">
          <div className="w-full xl:flex-1">
            <Editor formData={formData} setFormData={setFormData} />
          </div>
          <div className="w-full max-w-xl py-2 xl:ml-4 xl:max-w-md xl:py-6">
            <h2 className="mb-6 text-base font-semibold">Preview</h2>
            <div
              className="flex h-auto w-auto cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-gray-300 p-6 sm:p-8"
            >
              <SignaturePreview
                template={selectedTemplate}
                formData={formData}
                onHtmlChange={setSignatureHtml} // Pass the function to capture the HTML
              />
            </div>
            <div className="mt-6 flex flex-col justify-center gap-2">
              <CopyButton text={signatureHtml} className="w-full h-full" />
              {/* <button
                onClick={() =>
                  window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank', 'noopener,noreferrer')
                }
                className="bg-gray-100 border border-gray-200 font-medium py-3 px-4 gap-3 rounded-lg flex items-center justify-center hover:bg-gray-200 w-full h-full"
              >
                <img src="/assets/octicon_play-16.svg" alt="Paste Signature Tutorial" className="w-auto h-[24px]" />
                How to Paste Signature in Gmail
              </button> */}
              <p>To paste the signature in Gmail, go to <b>Settings → See all Settings → Signature</b>. Click on 'Create New' and then press Cmd/Ctrl + V in the editor. </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorPage;
