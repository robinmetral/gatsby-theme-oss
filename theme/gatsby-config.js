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
      title: title || "Jane Doe",
      message: message || "I'm a developer",
      pattern: pattern || "Arrows",
      color: color || "#4c4c4c",
      titleFont: titleFont || "Righteous",
      messageFont: messageFont || "Roboto",
      social: social || ["https://github.com/robinmetral/gatsby-theme-dev"]
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
