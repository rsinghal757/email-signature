export const DEFAULT_FORM_DATA = {
  firstName: '', lastName: '', email: '', jobTitle: '', phoneNumber: '', companyName: '',
  webSite: '', addressLine1: '', addressLine2: '', photoURL: '', bannerURL1: '', bannerURL2: '', bannerURL3: '',
  fontName: '', colorOne: '', colorTwo: '', colorThree: '', facebookURL: '', twitterURL: '', linkedinURL: '', youtubeURL: '', githubURL: '',
};
export const DEFAULT_STYLE_VALUES = { fontName: 'Arial, sans-serif', colorOne: '#202a28', colorTwo: '#586762', colorThree: '#31725e' };
export const EXAMPLE_FORM_DATA = {
  ...DEFAULT_FORM_DATA, firstName: 'Alex', lastName: 'Morgan', email: 'alex@northstudio.co',
  jobTitle: 'Creative Director', phoneNumber: '+1 212 555 0142', companyName: 'North Studio',
  webSite: 'northstudio.co',
  photoURL: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23dce8dd'/%3E%3Ccircle cx='48' cy='36' r='17' fill='%2394ae9d'/%3E%3Cpath d='M15 96c2-23 15-36 33-36s31 13 33 36' fill='%237a9986'/%3E%3C/svg%3E",
};
