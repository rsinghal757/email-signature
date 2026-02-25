import React, { useState } from 'react';
import TemplateSelector from '../components/TemplateSelector';
import Editor from '../components/Editor';
import SignaturePreview from '../components/SignaturePreview';
import CopyButton from '../components/CopyButton';
import { DEFAULT_FORM_DATA } from '../templates/defaults';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [signatureHtml, setSignatureHtml] = useState('');

  return (
    <div className="mx-auto w-full max-w-screen-2xl space-y-6 pb-10">
      {!selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} selectedTemplateId={selectedTemplate?.id} />
      ) : (
        <div className="space-y-6 py-2">
          <SectionHeader title="Build your signature" subtitle="Template → Form editing → Live preview → Copy action" />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Editor formData={formData} setFormData={setFormData} />
            <Card className="space-y-4 p-4 sm:p-5">
              <h2 className="text-base font-semibold text-slate-900">Live preview</h2>
              <div className="overflow-x-auto rounded-ui-md border border-slate-200 bg-white p-2 sm:p-4">
                <SignaturePreview template={selectedTemplate} formData={formData} onHtmlChange={setSignatureHtml} />
              </div>
              <CopyButton text={signatureHtml} />
              <p className="text-sm text-slate-600">
                In Gmail go to <b>Settings → See all settings → Signature</b>, create new, then paste with Cmd/Ctrl + V.
              </p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorPage;
