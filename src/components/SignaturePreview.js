import React, { useEffect, useMemo } from 'react';
import { mapFormDataToTemplateProps } from '../templates/adapter';
import SignatureTemplate from '../templates/SignatureTemplate';
import { renderTemplateHtml } from '../templates/renderTemplateHtml';
function SignaturePreview({ template, formData, onHtmlChange, compact = false }) {
  const templateData = useMemo(() => mapFormDataToTemplateProps(formData), [formData]);
  useEffect(() => { if (onHtmlChange && template) onHtmlChange(renderTemplateHtml(template, formData)); }, [formData, onHtmlChange, template]);
  if (!template) return null;
  return <div className={compact ? 'signature-compact' : 'signature-content'}><SignatureTemplate template={template} data={templateData} /></div>;
}
export default SignaturePreview;
