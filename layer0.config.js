'use strict'

// This file was automatically added by layer0 deploy.
// You should commit this file to source control.

module.exports = {
  backends: {},
  includeNodeModules: true,
  connector: '@layer0/nuxt',
  includeFiles: {
    'content/**/*': true,
    ".nuxt/content/**/*": true,
    "./.nuxt/dist/sitemap-routes.json": true,
  },
}
