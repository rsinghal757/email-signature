# Email Signature Template Design System

## Spacing scale
- `4px` micro spacing for tightly grouped metadata.
- `8px` compact spacing for title-to-subtitle.
- `12px` section spacing for contact groups.
- `16px` base container padding.
- `20px` roomy outer padding for primary cards.

## Text hierarchy
- Name: `18–20px`, bold (`700`), neutral-900.
- Role/title: `14px`, regular, neutral-600.
- Company/address: `13px`, regular, neutral-500/600.
- Contact/meta links: `12–13px`, neutral-700.

## Font stack (default)
`{{fontName}}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Helvetica Neue', Helvetica, sans-serif`

## Safe neutral palette defaults
- neutral-900: `#111827`
- neutral-700: `#374151`
- neutral-600: `#4b5563`
- neutral-500: `#6b7280`
- neutral-200: `#e5e7eb`
- neutral-100: `#f3f4f6`
- white: `#ffffff`

## Template curation
- Sleek set: `template_1` through `template_6`.
- Legacy/classic set: `template_7` through `template_12`.
- Classic templates are hidden by default in the selector and can be toggled on.

## Email safety conventions
- Use table-based wrappers with `width: 100%` + `max-width` constraints (`520px` or `560px`).
- Avoid local icon assets; use text links for social profiles.
- Avoid hard-coded separator characters that can dangle when fields are empty.
