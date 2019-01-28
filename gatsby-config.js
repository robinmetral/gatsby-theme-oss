module.exports = {
  siteMetadata: {
    title: "Hi, looking for a starter? 🔎",
    message: "🚧 Host me on your domain while you build your new Gatsby site! (or keep me longer, that's fine too) 👷",
    pattern: "Arrows",
    color: "#4c4c4c",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: ["https://github.com/robinmetral/gatsby-starter-under-construction", "https://twitter.com/robinmetral"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}
