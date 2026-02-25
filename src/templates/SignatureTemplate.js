import React from 'react';

const stylesByVariant = {
  1: { accent: 'rounded-lg border border-slate-200' },
  2: { accent: 'rounded-lg border border-blue-200 bg-blue-50/50' },
  3: { accent: 'rounded-lg border border-violet-200 bg-violet-50/50' },
  4: { accent: 'rounded-lg border border-emerald-200 bg-emerald-50/50' },
  5: { accent: 'rounded-lg border border-amber-200 bg-amber-50/50' },
  6: { accent: 'rounded-lg border border-rose-200 bg-rose-50/50' },
  7: { accent: 'rounded-lg border border-slate-200 bg-white' },
  8: { accent: 'rounded-lg border border-slate-300 bg-slate-50' },
  9: { accent: 'rounded-lg border border-zinc-300 bg-zinc-50' },
  10: { accent: 'rounded-lg border border-cyan-200 bg-cyan-50' },
  11: { accent: 'rounded-lg border border-lime-200 bg-lime-50' },
  12: { accent: 'rounded-lg border border-fuchsia-200 bg-fuchsia-50' },
};

function SignatureTemplate({ template, data }) {
  const style = stylesByVariant[template.variant] || stylesByVariant[1];

  return (
    <div className={`w-[560px] max-w-full p-4 ${style.accent}`} style={{ fontFamily: data.fontName }}>
      <div className="flex flex-wrap items-start gap-3">
        {data.photoURL && <img src={data.photoURL} alt="Profile" className="h-14 w-14 rounded-full object-cover" />}
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold" style={{ color: data.colorOne }}>{data.fullName}</p>
          <p className="truncate text-sm font-medium" style={{ color: data.colorThree }}>{data.jobTitle}</p>
          <p className="truncate text-xs" style={{ color: data.colorTwo }}>{data.companyName}</p>
          <div className="mt-2 space-y-1 text-xs break-all" style={{ color: data.colorTwo }}>
            <p>{data.email}</p>
            <p>{data.phoneNumber}</p>
            {data.webSite && <p>{data.webSite}</p>}
            {(data.addressLine1 || data.addressLine2) && <p>{[data.addressLine1, data.addressLine2].filter(Boolean).join(', ')}</p>}
          </div>
          {data.socials.length > 0 && (
            <p className="mt-2 text-xs break-all" style={{ color: data.colorTwo }}>
              {data.socials.map((item) => `${item.label}: ${item.value}`).join(' • ')}
            </p>
          )}
        </div>
      </div>
      {(data.bannerURL1 || data.bannerURL2 || data.bannerURL3) && (
        <div className="mt-3 grid gap-2">
          {[data.bannerURL1, data.bannerURL2, data.bannerURL3].filter(Boolean).map((bannerUrl) => (
            <img key={bannerUrl} src={bannerUrl} alt="Banner" className="h-auto max-h-20 w-full rounded object-cover" />
          ))}
        </div>
      )}
    </div>
  );
}

export default SignatureTemplate;
