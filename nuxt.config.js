const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles').fetch();
  for (const article of articles) {
    routes.push(`blog/${article.slug}`);
  }
  const projects = await $content('projects').fetch();
  for (const project of projects) {
    routes.push(`projects/${project.slug}`);
  }
  return routes;
}

const constructFeedItem = (post, type, hostname) => {
  const url = `${hostname}/${type}/${post.slug}`;
  return {
    title: `${type} • ${post.title}`,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText
  }
}

const create = async (feed) => {
  const hostname = `https://karngyan.com`;
  feed.options = {
    title: `Blog & Projects | Gyan Prakash Karn`,
    description: 'I blog tech, write a weekend newsletter called Software Shots and tinker with side projects every now n then.',
    link: `${hostname}/feed.xml`
  }
  const { $content } = require('@nuxt/content')
  const posts = await $content('articles').fetch();
  for (const post of posts) {
    const feedItem = await constructFeedItem(post, 'blog', hostname);
    feed.addItem(feedItem);
  }

  const projects = await $content('projects').fetch();
  for (const project of projects) {
    const feedItem = await constructFeedItem(project, 'projects', hostname);
    feed.addItem(feedItem);
  }

  return feed;
}

export default {
  // // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  modern: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Karn | Friendly Neighborhood Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I blog tech, write a weekend newsletter called Software Shots and tinker with side projects every now n then.' },
      { name: 'title', content: 'Gyan Prakash Karn | Friendly Neighborhood Developer'},
      { name: 'author', content: 'Gyan Prakash Karn | mail@karngyan.com'},
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://karngyan.com'},
      { property: 'og:title', content: 'Karn | Friendly Neighborhood Developer'},
      { property: 'og:description', content: 'I blog tech, write a weekend newsletter called Software Shots and tinker with side projects every now n then.'},
      { property: 'og:image', content: 'https://cdn.karngyan.com/logo_dark.png'},

      { property: 'twitter:card', content: 'https://cdn.karngyan.com/logo_dark.png'},
      { property: 'twitter:url', content: 'https://karngyan.com'},
      { property: 'twitter:title', content: 'Karn | Friendly Neighborhood Developer'},
      { property: 'twitter:description', content: 'I blog tech, write a weekend newsletter called Software Shots and tinker with side projects every now n then.'},
      { property: 'twitter:image', content: 'https://cdn.karngyan.com/logo_dark.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css',
    'github-calendar/dist/github-calendar-responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuetyper.js', ssr: false},
    { src: '~/plugins/directives.js', ssr: false},
    { src: '~/plugins/aos.js', ssr: false},
    { src: '~/plugins/vueGtag.js', ssr: false},
    { src: '~/plugins/vueClapButton.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '@/components',
    '@/components/home',
    '@/components/logos',
    '@/components/blog',
    '@/components/projects',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    'nuxt-i18n',
    '@nuxtjs/feed',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
  ],

  googleAnalytics: {
    id: 'G-7GV60QQY22'
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],

  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      create, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: [] // Will be passed as 2nd argument to `create` function
    }
  ],

  pwa: {
    icon: {
      fileName: 'favicon.ico'
    }
  },

  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'authAction',
          subscribeManually: false
        },
        ssr: true,
      },
      firestore: true
    }
  },

  sitemap: {
    hostname: 'https://karngyan.com',
    routes: createSitemapRoutes
  },

  toast: {
    position: 'bottom-center'
  },

  router: {
    middleware: 'auth'
  },

  i18n: {
    lazy: true,
    langDir: 'lang/',
    locales: [
      {code: 'en', name: 'English', file: 'en_US.js'}
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: true,
    dir: 'content',
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layout: true,
      pages: true,
      commons: true,
    },
  },

  tailwindcss: {
    jit: true
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#fd2d78',
    background: '#212324'
  },

  loading: {
    color: '#fd2d78',
    height: '1px',
    throttle: 0
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text;
        const { text } = require('reading-time')(document.text)
        document.readingTime = text
      }
    }
  }
}
