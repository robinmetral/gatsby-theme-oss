module.exports = ({
  title,
  message,
  pattern,
  color,
  titleFont,
  messageFont,
  social
}) => {
  return {
    siteMetadata: {
      title: title || "Under Construction",
      message:
        message ||
        "Blazing fast Under Construction page with a blazing quick setup",
      pattern: pattern || "Arrows",
      color: color || "#4c4c4c",
      titleFont: titleFont || "Righteous",
      messageFont: messageFont || "Roboto",
      social: social || [
        "https://github.com/robinmetral/gatsby-theme-under-construction",
        "https://www.robinmetral.com"
      ]
    },
    plugins: [
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: title,
          short_name: title,
          start_url: "/",
          background_color: color,
          theme_color: color,
          display: "standalone",
          icon: "icon.png"
        }
      },
      "gatsby-plugin-offline",
      "gatsby-plugin-react-helmet"
    ]
  };
};
