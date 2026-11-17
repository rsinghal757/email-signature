import React from 'react';
import SignaturePreview from './SignaturePreview';
import { TEMPLATE_REGISTRY } from '../templates/registry';
import { EXAMPLE_FORM_DATA } from '../templates/defaults';

function TemplateSelector({ onSelect }) {
  return <section className="gallery">
    <div className="page-intro"><span className="eyebrow">01 / Choose a starting point</span><h1>Make a good sign-off.</h1><p>Pick a layout you like. You can make it yours in the next step.</p></div>
    <div className="template-grid">{TEMPLATE_REGISTRY.map((template, index) => <button key={template.id} type="button" className="template-card" onClick={() => onSelect(template)}>
      <div className="template-paper"><SignaturePreview template={template} formData={EXAMPLE_FORM_DATA} compact /></div>
      <div className="template-caption"><div><span className="template-number">{String(index + 1).padStart(2, '0')} / </span><strong>{template.name}</strong><p>{template.description}</p></div><span className="template-arrow" aria-hidden="true">↗</span></div>
    </button>)}</div>
  </section>;
}
export default TemplateSelector;
