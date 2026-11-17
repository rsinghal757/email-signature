import React from 'react';

// Email clients do not load the application's stylesheet. Keep every signature
// self-contained, with table layout and inline styles that survive copy/paste.
function SignatureTemplate({ template, data }) {
  const variant = template.variant || 1;
  const layout = (variant - 1) % 4;
  const compact = variant > 8;
  const editorial = variant > 4 && variant <= 8;
  const photoSize = compact ? 58 : 72;
  const text = { fontFamily: data.fontName, color: data.colorTwo, fontSize: 12, lineHeight: '1.6' };
  const name = { color: data.colorOne, fontSize: compact ? 16 : editorial ? 20 : 18, fontWeight: editorial ? 'normal' : 'bold', letterSpacing: editorial ? '-0.02em' : 'normal', lineHeight: '1.25', margin: 0 };
  const accent = { color: data.colorThree };
  const photo = data.photoURL && <img src={data.photoURL} alt="Profile" width={photoSize} height={photoSize} style={{ display: 'block', width: photoSize, height: photoSize, objectFit: 'cover', borderRadius: variant % 3 === 0 ? 4 : '50%' }} />;
  const identity = <>
    <div style={name}>{data.fullName}</div>
    <div style={{ ...text, marginTop: 3, color: data.colorThree }}>{data.jobTitle}{data.companyName ? ` · ${data.companyName}` : ''}</div>
  </>;
  const details = <>
    <div style={{ ...text, marginTop: 9, overflowWrap: 'anywhere' }}>
      {[data.email, data.phoneNumber, data.webSite, [data.addressLine1, data.addressLine2].filter(Boolean).join(', ')].filter(Boolean).map((value, i) => <div key={i}>{value}</div>)}
    </div>
    {data.socials.length > 0 && <div style={{ ...text, marginTop: 7, overflowWrap: 'anywhere' }}>{data.socials.map((item, i) => <React.Fragment key={item.label}>{i > 0 && <span style={{ color: data.colorTwo }}> &nbsp;·&nbsp; </span>}<a href={item.value} style={{ ...accent, textDecoration: 'none' }}>{item.label}</a></React.Fragment>)}</div>}
  </>;
  const content = <>{identity}{details}</>;
  return (
    <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', fontFamily: data.fontName, maxWidth: 500, width: '100%' }}><tbody>
      <tr><td style={{ padding: 0 }}>
        {layout === 0 && <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}><tbody><tr>
          {photo && <td valign="top" style={{ paddingRight: editorial ? 26 : 18 }}>{photo}</td>}
          <td valign="top" style={{ borderLeft: `2px solid ${data.colorThree}`, paddingLeft: 16 }}>{content}</td>
        </tr></tbody></table>}
        {layout === 1 && <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}><tbody><tr><td style={{ paddingBottom: 10, borderBottom: `2px solid ${data.colorThree}` }}>{identity}</td></tr><tr><td>{details}</td></tr>{photo && <tr><td style={{ paddingTop: 12 }}>{photo}</td></tr>}</tbody></table>}
        {layout === 2 && <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}><tbody><tr><td valign="top">{identity}</td>{photo && <td valign="top" style={{ paddingLeft: 24 }}>{photo}</td>}</tr><tr><td colSpan="2" style={{ paddingTop: 3 }}>{details}</td></tr></tbody></table>}
        {layout === 3 && <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse' }}><tbody><tr>{photo && <td valign="top" style={{ paddingRight: editorial ? 26 : 18 }}>{photo}</td>}<td valign="top">{identity}<div style={{ width: 28, borderTop: `2px solid ${data.colorThree}`, marginTop: 10 }} />{details}</td></tr></tbody></table>}
      </td></tr>
      {[data.bannerURL1, data.bannerURL2, data.bannerURL3].filter(Boolean).map((url, i) => <tr key={i}><td style={{ paddingTop: 12 }}><img src={url} alt="Banner" style={{ display: 'block', maxWidth: '100%', height: 'auto', border: 0 }} /></td></tr>)}
    </tbody></table>
  );
}

export default SignatureTemplate;
