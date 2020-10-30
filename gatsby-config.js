require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "IPerez",
    description: "This is Irene's Portfolio Website",
    author: "Irene Perez",
    twitterUsername: "@devRene_0217",
    image: "/irene-perez.com.png",
    siteUrl: "https://irene-perez.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-portfolio-irene.herokuapp.com`,
        queryLimit: 5000, 
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}