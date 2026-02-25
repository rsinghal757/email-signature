export const TEMPLATE_REGISTRY = Array.from({ length: 12 }, (_, index) => {
  const id = `template_${index + 1}`;
  return {
    id,
    variant: index + 1,
    name: `Template ${index + 1}`,
    description: index < 6 ? 'Modern sleek email signature' : 'Classic business email signature',
    thumbnail: '/assets/mockup.png',
  };
});
