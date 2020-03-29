module.exports = ({ title, subtitle, github_token }) => {
  return {
    siteMetadata: {
      title,
      subtitle
    },
    plugins: [
      {
        resolve: `gatsby-source-graphql`,
        options: {
          typeName: `GitHub`,
          fieldName: `github`,
          url: `https://api.github.com/graphql`,
          headers: {
            Authorization: `Bearer ${github_token}`
          }
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: title,
          short_name: title,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#fff`,
          display: `standalone`,
          icon: `icon.png`
        }
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`
    ]
  };
};
