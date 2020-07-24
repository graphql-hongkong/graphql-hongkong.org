require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `GraphQL Hong Kong`,
    description: `GraphQL Hong Kong Meetup & Conf`,
    author: `Carlos Rufo & Tobias Meixner`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // includePaths: ["absolute/path/a", "absolute/path/b"],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `graphql-hongkong`,
        short_name: `gql-hk`,
        start_url: `/`,
        background_color: `#e535ab`,
        theme_color: `#e535ab`,
        display: `minimal-ui`,
        icon: `src/images/graphql-hongkong-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        downloadLocalImages: true,
      },
    },
  ],
};
