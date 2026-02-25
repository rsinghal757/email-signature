import React, { useEffect, useMemo, useState } from 'react';
import SignaturePreview from '../components/SignaturePreview';

const TEMPLATE_COUNT = 12;
const SLEEK_TEMPLATE_COUNT = 6;

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
  const [templates, setTemplates] = useState([]);
  const [showClassic, setShowClassic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadTemplates = async () => {
      setIsLoading(true);
      setHasLoadError(false);

      try {
        const templatePromises = Array.from({ length: TEMPLATE_COUNT }, (_, index) => {
          const templateNumber = index + 1;
          return fetch(`/templates/template_${templateNumber}.txt`).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch template_${templateNumber}.txt`);
            }

            return response.text();
          });
        });

        const htmlContents = await Promise.all(templatePromises);
        const newTemplates = htmlContents.map((htmlContent, index) => {
          const templateNumber = index + 1;
          const isClassic = templateNumber > SLEEK_TEMPLATE_COUNT;

          return {
            id: `template_${templateNumber}`,
            htmlContent,
            fileUrl: `/templates/template_${templateNumber}.txt`,
            isClassic,
            label: isClassic ? `Template ${templateNumber} (Classic)` : `Template ${templateNumber} (Sleek)`,
          };
        });

        if (!isCancelled) {
          setTemplates(newTemplates);
        }
      } catch (error) {
        console.error('Error loading templates:', error);
        if (!isCancelled) {
          setHasLoadError(true);
          setTemplates([]);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadTemplates();

    return () => {
      isCancelled = true;
    };
  }, []);

  const filteredTemplates = useMemo(
    () => templates.filter((template) => showClassic || !template.isClassic),
    [showClassic, templates],
  );

  const skeletonCount = showClassic ? TEMPLATE_COUNT : SLEEK_TEMPLATE_COUNT;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-base font-semibold text-[#101010]">Select a template</h2>
        <label className="inline-flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={showClassic}
            onChange={(event) => setShowClassic(event.target.checked)}
            className="rounded border-gray-300"
          />
          Show classic templates (legacy)
        </label>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div
              key={`skeleton-${index + 1}`}
              className="min-h-[220px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:min-h-[250px]"
            >
              <div className="h-full w-full animate-pulse rounded-lg border border-gray-100 bg-slate-100" />
            </div>
          ))}
        </div>
      ) : hasLoadError ? (
        <div className="rounded-xl border border-red-100 bg-red-50 px-5 py-6 text-sm text-red-700">
          We couldn&apos;t load templates right now. Please refresh and try again.
        </div>
      ) : filteredTemplates.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-6 text-sm text-gray-600">
          No templates are available for this view. Try enabling classic templates.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {filteredTemplates.map((template) => {
            const isSelected = selectedTemplateId === template.id;

            return (
              <button
                key={template.id}
                type="button"
                className={`group relative flex min-h-[220px] w-full flex-col rounded-xl border bg-white p-3 text-left shadow-sm transition-all duration-200 ease-out sm:min-h-[250px] sm:p-4 ${
                  isSelected
                    ? 'border-sky-500 shadow-md ring-2 ring-sky-200'
                    : 'border-gray-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md active:translate-y-0 active:shadow-sm'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2`}
                onClick={() => onSelect(template)}
                aria-label={template.label}
                title={template.label}
              >
                {template.isClassic && (
                  <span className="absolute right-3 top-3 z-10 rounded-full border border-gray-200 bg-white/95 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600">
                    Classic
                  </span>
                )}

                <div className="h-full w-full overflow-hidden rounded-lg border border-slate-100 bg-slate-50/70">
                  <div className="origin-top-left scale-[0.44] sm:scale-[0.5] lg:scale-[0.54]">
                    <SignaturePreview template={template} formData={dummyData} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TemplateSelector;
