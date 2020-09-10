module.exports = {
  siteMetadata: {
    title: `Diego De La Torre`,
    description: `Personal Website`,
    author: `Diego De La Torre`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176947288-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00a8f3`,
        theme_color: `#00a8f3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options:{
        google:{
          families: ['Raleway:200, 300, 400, 500, 600, 700, 800, 900','Merriweather', 'Open Sans:400, 600, 700']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          }
        ]
      }
    },
    `gatsby-plugin-remove-trailing-slashes`
  ],
}
