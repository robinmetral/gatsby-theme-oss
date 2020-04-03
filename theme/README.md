# gatsby-theme-oss

A Gatsby theme to showcase your open-source projects.

## Getting started

### Install

Install the theme on any Gatsby site:

```shell
# with yarn:
yarn add gatsby-theme-oss
# or with npm:
npm install gatsby-theme-oss
```

### Configure

Configure the theme in your `gatsby-config.js`:

```javascript
require("dotenv").config(); // configures environment variables for the GitHub token, more on https://gatsby.dev/env-vars

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-oss",
      options: {
        title: "Hi, I'm Robin 👋", // your site's title
        subtitle:
          "I'm the developer behind gatsby-theme-oss. Check out my other open-source projects below!", // your site's subtitle
        github_username: "robinmetral", // your GitHub username to pull your pinned repos
        github_token: process.env.GITHUB_TOKEN // a GitHub token (with repo access)
      }
    }
  ]
};
```

You'll also need an icon in your root directory named `icon.png` to generate a favicon for your site (the theme uses `gatsby-plugin-manifest` under the hood).

## Features

- :octocat: Showcases your pinned repos from GitHub
- :woman_singer: Styled with [Emotion](https://github.com/emotion-js/emotion)
- :sparkles: Themeable with [Theme UI](https://github.com/system-ui/theme-ui)
- :100: 100/100 Lighthouse scores
