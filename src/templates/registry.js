const names = [
  ['The Classic', 'A considered introduction with a fine accent line.'],
  ['The Editorial', 'A clear hierarchy with a horizontal rule.'],
  ['The Portrait', 'A simple introduction with room for a photo.'],
  ['The Personal', 'A friendly layout with a quiet detail.'],
  ['The Studio', 'A clean profile with a subtle dividing line.'],
  ['The Letterhead', 'A crisp, structured signature.'],
  ['The Profile', 'A balanced layout for your details.'],
  ['The Note', 'A relaxed, understated introduction.'],
  ['The Compact', 'A smaller take on the classic.'],
  ['The Brief', 'A compact signature with a sharp rule.'],
  ['The Direct', 'A concise profile with a photo.'],
  ['The Simple', 'A minimal signature for everyday email.'],
];
export const TEMPLATE_REGISTRY = names.map(([name, description], index) => ({
  id: `template_${index + 1}`, variant: index + 1, name, description,
}));
