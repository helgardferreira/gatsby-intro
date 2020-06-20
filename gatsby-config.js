/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx')
        }
      }
    }
  ]
};
