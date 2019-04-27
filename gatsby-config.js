require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    siteUrl: 'https://apical.org',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {},
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Apical - Become an Experience Creator',
        short_name: 'Apical',
        start_url: '/',
        background_color: '#252D3B',
        theme_color: '#252D3B',
        display: 'minimal-ui',
        icons: [
          {
            src: 'src/images/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'src/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    'gatsby-plugin-sitemap',
    // 'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
