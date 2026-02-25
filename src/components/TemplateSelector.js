import React from 'react';
import SignaturePreview from './SignaturePreview';
import { TEMPLATE_REGISTRY } from '../templates/registry';
import { EXAMPLE_FORM_DATA } from '../templates/defaults';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

function TemplateSelector({ onSelect, selectedTemplateId = null }) {
  return (
    <section className="space-y-5 py-4 sm:py-6">
      <SectionHeader title="Select a template" subtitle="Pick a modern signature layout to begin editing." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TEMPLATE_REGISTRY.map((template) => {
          const isSelected = selectedTemplateId === template.id;

          return (
            <button
              key={template.id}
              type="button"
              className="text-left"
              onClick={() => onSelect(template)}
            >
              <Card className={`min-h-[260px] p-4 transition ${isSelected ? 'ring-2 ring-brand-200 border-brand-400' : 'hover:-translate-y-0.5 hover:shadow-lg'}`}>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-900">{template.name}</p>
                  <p className="text-xs text-slate-500">{template.description}</p>
                </div>
                <div className="overflow-hidden rounded-ui-md border border-slate-100 bg-slate-50 p-2">
                  <SignaturePreview template={template} formData={EXAMPLE_FORM_DATA} compact />
                </div>
              </Card>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TemplateSelector;
