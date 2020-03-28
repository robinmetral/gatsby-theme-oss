require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-oss",
      options: {
        title: "Robin Métral",
        subtitle:
          "I'm the developer behind gatsby-theme-oss. Check out my other projects on GitHub!",
        github_username: "robinmetral",
        github_token: process.env.GITHUB_TOKEN
      }
    }
  ]
};
