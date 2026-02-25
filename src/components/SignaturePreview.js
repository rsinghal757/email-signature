import React, { useEffect, useMemo } from 'react';
import { mapFormDataToTemplateProps } from '../templates/adapter';
import SignatureTemplate from '../templates/SignatureTemplate';
import { renderTemplateHtml } from '../templates/renderTemplateHtml';

function SignaturePreview({ template, formData, onHtmlChange, compact = false }) {
  const templateData = useMemo(() => mapFormDataToTemplateProps(formData), [formData]);

  useEffect(() => {
    if (onHtmlChange && template) {
      onHtmlChange(renderTemplateHtml(template, formData));
    }
  }, [formData, onHtmlChange, template]);

  if (!template) {
    return <p className="text-sm text-slate-500">Select a template to preview.</p>;
  }

  return (
    <div className={`overflow-x-auto ${compact ? 'scale-[0.62] origin-top-left w-[161%]' : ''}`}>
      <SignatureTemplate template={template} data={templateData} />
    </div>
  );
}

export default SignaturePreview;
