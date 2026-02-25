import React, { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_STYLE_VALUES = {
  fontName: 'Arial',
  colorOne: '#000000',
  colorTwo: '#ffffff',
  colorThree: '#0000ff',
};

const sanitizePlaceholderValue = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

function SignaturePreview({ template, formData, onHtmlChange }) {
  const [rawTemplate, setRawTemplate] = useState('');
  const [templateHtml, setTemplateHtml] = useState('');
  const templateCacheRef = useRef(new Map());

  const templateCacheKey = useMemo(() => {
    if (!template) {
      return '';
    }

    return `${template.id || ''}::${template.fileUrl || ''}`;
  }, [template]);

  useEffect(() => {
    let isCancelled = false;

    if (!template) {
      setRawTemplate('');
      return () => {
        isCancelled = true;
      };
    }

    const cachedTemplate = templateCacheRef.current.get(templateCacheKey);
    if (cachedTemplate) {
      setRawTemplate(cachedTemplate);
      return () => {
        isCancelled = true;
      };
    }

    const inlineTemplate = template.htmlContent || '';
    if (inlineTemplate) {
      templateCacheRef.current.set(templateCacheKey, inlineTemplate);
      setRawTemplate(inlineTemplate);
      return () => {
        isCancelled = true;
      };
    }

    if (!template.fileUrl) {
      setRawTemplate('');
      return () => {
        isCancelled = true;
      };
    }

    fetch(template.fileUrl)
      .then((response) => response.text())
      .then((data) => {
        if (isCancelled) {
          return;
        }

        templateCacheRef.current.set(templateCacheKey, data);
        setRawTemplate(data);
      })
      .catch((error) => console.error('Error loading template:', error));

    return () => {
      isCancelled = true;
    };
  }, [template, templateCacheKey]);

  useEffect(() => {
    if (!rawTemplate) {
      setTemplateHtml('');
      return;
    }

    const preparedFormData = {
      ...formData,
      fontName: formData.fontName?.trim() || DEFAULT_STYLE_VALUES.fontName,
      colorOne: formData.colorOne?.trim() || DEFAULT_STYLE_VALUES.colorOne,
      colorTwo: formData.colorTwo?.trim() || DEFAULT_STYLE_VALUES.colorTwo,
      colorThree: formData.colorThree?.trim() || DEFAULT_STYLE_VALUES.colorThree,
    };

    let finalizedTemplate = rawTemplate;
    Object.entries(preparedFormData).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{${key}}}`, 'g');
      finalizedTemplate = finalizedTemplate.replace(placeholder, sanitizePlaceholderValue(value));
    });

    setTemplateHtml(finalizedTemplate);
  }, [formData, rawTemplate]);

  useEffect(() => {
    if (onHtmlChange) {
      onHtmlChange(templateHtml);
    }
  }, [onHtmlChange, templateHtml]);

  return (
    <div>
      {templateHtml ? (
        <div dangerouslySetInnerHTML={{ __html: templateHtml }} />
      ) : (
        <p>Loading preview...</p>
      )}
    </div>
  );
}

export default SignaturePreview;
