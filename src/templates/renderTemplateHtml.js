import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SignatureTemplate from './SignatureTemplate';
import { mapFormDataToTemplateProps } from './adapter';

export function renderTemplateHtml(template, formData) {
  if (!template) {
    return '';
  }

  const data = mapFormDataToTemplateProps(formData);
  const markup = renderToStaticMarkup(<SignatureTemplate template={template} data={data} />);
  return `<!doctype html><html><body>${markup}</body></html>`;
}
