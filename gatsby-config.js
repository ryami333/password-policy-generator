module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.ico"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript"
  ]
};
