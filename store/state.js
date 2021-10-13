const state = {
  name: 'gyan prakash karn',
  domain: 'karngyan.com',
  social: {
    github: 'karngyan',
    linkedin: 'karngyan',
    facebook: 'karnsometimes',
    twitter: 'gyankarn',
    instagram: 'karngyan.dev',
    codestats: 'karngyan'
  },
  buyMeACoffee: {
    enabled: true,
    beer: true,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  project: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_CV_GYAN_KARN.pdf',
    pdfUrlDark: '/RESUME_CV_GYAN_KARN_DARK.pdf'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Big Sur'},
      {title: 'Memory', value: '16 GB'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop', value: 'MacBook Pro M1 (13-inch, 2020)'}
    ]
  },
  recommendations: {
    enabled: true
  },
  user: null,
  comments: {},
  likes: {}
}

export default function () {
  return state;
};
