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
    photoURl: '',
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
    <div className="container mx-auto px-4 flex flex-col overflow-hidden">
      {selectedTemplate === null ? (
        <TemplateSelector onSelect={handleTemplateSelect} />
      ) : (
        <div className="container flex justify-between mx-auto gap-24">
          <div className="flex-grow">
            <Editor formData={formData} setFormData={setFormData} />
          </div>
          <div className="w-full max-w-md ml-4 py-6">
            <h2 className="text-base font-semibold mb-6">Preview</h2>
            <div
              className="cursor-pointer border border-gray-300 p-8 w-auto h-[250px] overflow-hidden rounded-sm flex justify-center items-center"
            >
              <SignaturePreview
                template={selectedTemplate}
                formData={formData}
                onHtmlChange={setSignatureHtml} // Pass the function to capture the HTML
              />
            </div>
            <div className="flex flex-col mt-6 justify-center gap-2">
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
