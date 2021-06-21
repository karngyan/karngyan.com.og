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
    pdfUrl: '/RESUME_GYAN_KARN.pdf',
    pdfUrlDark: '/RESUME_GYAN_KARN_DARK.pdf'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
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
