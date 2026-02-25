import { DEFAULT_STYLE_VALUES } from './defaults';

export function mapFormDataToTemplateProps(formData = {}) {
  return {
    firstName: formData.firstName?.trim() || 'First',
    lastName: formData.lastName?.trim() || 'Last',
    fullName: `${formData.firstName?.trim() || 'First'} ${formData.lastName?.trim() || 'Last'}`,
    email: formData.email?.trim() || 'your@email.com',
    jobTitle: formData.jobTitle?.trim() || 'Role',
    phoneNumber: formData.phoneNumber?.trim() || '+1 000 000 0000',
    companyName: formData.companyName?.trim() || 'Company Name',
    webSite: formData.webSite?.trim() || '',
    addressLine1: formData.addressLine1?.trim() || '',
    addressLine2: formData.addressLine2?.trim() || '',
    photoURL: formData.photoURL?.trim() || '',
    bannerURL1: formData.bannerURL1?.trim() || '',
    bannerURL2: formData.bannerURL2?.trim() || '',
    bannerURL3: formData.bannerURL3?.trim() || '',
    fontName: formData.fontName?.trim() || DEFAULT_STYLE_VALUES.fontName,
    colorOne: formData.colorOne?.trim() || DEFAULT_STYLE_VALUES.colorOne,
    colorTwo: formData.colorTwo?.trim() || DEFAULT_STYLE_VALUES.colorTwo,
    colorThree: formData.colorThree?.trim() || DEFAULT_STYLE_VALUES.colorThree,
    socials: [
      { label: 'LinkedIn', value: formData.linkedinURL?.trim() || '' },
      { label: 'GitHub', value: formData.githubURL?.trim() || '' },
      { label: 'Twitter', value: formData.twitterURL?.trim() || '' },
      { label: 'Facebook', value: formData.facebookURL?.trim() || '' },
      { label: 'YouTube', value: formData.youtubeURL?.trim() || '' },
    ].filter((item) => item.value),
  };
}
