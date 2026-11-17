import { renderTemplateHtml } from './renderTemplateHtml';
import { TEMPLATE_REGISTRY } from './registry';
import { DEFAULT_FORM_DATA } from './defaults';

test.each(TEMPLATE_REGISTRY)('$name retains details and inline styling in copied HTML', (template) => {
  const html = renderTemplateHtml(template, {
    ...DEFAULT_FORM_DATA, firstName: 'Rohit', lastName: 'Singhal', email: 'rohit@example.com',
    companyName: 'Studio', webSite: 'example.com', linkedinURL: 'https://linkedin.com/in/example',
    photoURL: 'https://example.com/photo.png', bannerURL1: 'https://example.com/banner.png', colorThree: '#123456',
  });
  expect(html).toContain('Rohit Singhal');
  expect(html).toContain('rohit@example.com');
  expect(html).toContain('example.com/banner.png');
  expect(html).toContain('https://linkedin.com/in/example');
  expect(html).toContain('#123456');
  expect(html).toContain('<table');
  expect(html).not.toContain('class=');
});
