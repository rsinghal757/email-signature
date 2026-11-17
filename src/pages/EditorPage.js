import React, { useState } from 'react';
import TemplateSelector from '../components/TemplateSelector';
import Editor from '../components/Editor';
import SignaturePreview from '../components/SignaturePreview';
import CopyButton from '../components/CopyButton';
import { DEFAULT_FORM_DATA } from '../templates/defaults';
function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [signatureHtml, setSignatureHtml] = useState('');
  return <div className="workspace">{!selectedTemplate ? <TemplateSelector onSelect={setSelectedTemplate} /> : <section className="editor-page">
    <button className="back-link" type="button" onClick={() => setSelectedTemplate(null)}>← &nbsp; All templates</button>
    <div className="page-intro editor-intro"><span className="eyebrow">02 / Make it yours</span><h1>The details make it.</h1><p>Fill in what you need and see your signature come together.</p></div>
    <div className="editor-layout"><Editor formData={formData} setFormData={setFormData} />
      <aside className="preview-panel"><div className="panel-heading"><div><span className="eyebrow">Your signature</span><h2>Live preview</h2></div><span className="preview-status"><span /> Live</span></div>
        <div className="preview-paper"><div className="email-context"><span>New message</span><span>•••</span></div><div className="email-lines"><span /><span /></div><div className="signature-stage"><SignaturePreview template={selectedTemplate} formData={formData} onHtmlChange={setSignatureHtml} /></div></div>
        <CopyButton text={signatureHtml} /><p className="paste-help">In Gmail, open <strong>Settings → See all settings → Signature</strong>, create a new signature, then paste it in.</p>
      </aside></div>
  </section>}</div>;
}
export default EditorPage;
