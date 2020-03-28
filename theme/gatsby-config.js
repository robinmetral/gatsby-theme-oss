module.exports = ({ title, subtitle, color }) => {
  return {
    siteMetadata: {
      title: title || "Jane Doe",
      subtitle: subtitle || "I'm a developer"
    },
    plugins: [
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: title,
          short_name: title,
          start_url: "/",
          background_color: color || "#fff",
          theme_color: color || "#fff",
          display: "standalone",
          icon: "icon.png"
        }
      },
      "gatsby-plugin-offline",
      "gatsby-plugin-react-helmet"
    ]
  };
};
