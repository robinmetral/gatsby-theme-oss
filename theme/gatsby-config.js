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
      message: message || "A creative and blazing fast under construction page",
      pattern: pattern || "Arrows",
      color: color || "#4c4c4c",
      titleFont: titleFont || "Righteous",
      messageFont: messageFont || "Roboto",
      social: social || [
        "https://github.com/robinmetral/gatsby-theme-under-construction",
        "https://www.robinmetral.com"
      ]
    }
  };
};
