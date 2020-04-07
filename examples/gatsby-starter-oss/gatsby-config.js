require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-oss",
      options: {
        title: "Hi, I'm Robin 👋",
        subtitle:
          "I'm the developer behind gatsby-theme-oss. Check out my other open-source projects below!",
        github_username: "robinmetral",
        github_token: process.env.GITHUB_TOKEN,
      },
    },
  ],
};
