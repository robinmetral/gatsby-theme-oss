export default {
  site: {
    siteMetadata: {
      title: "gatsby-theme-oss",
      subtitle: "Yet another Gatsby theme"
    }
  },
  github: {
    user: {
      itemShowcase: {
        hasPinnedItems: true,
        items: {
          nodes: [
            {
              __typename: "GitHub_Repository",
              nameWithOwner: "gatsbyjs/gatsby",
              description:
                "Build blazing fast, modern apps and websites with React",
              primaryLanguage: {
                color: "#f1e05a"
              },
              url: "https://github.com/gatsbyjs/gatsby"
            },
            {
              __typename: "GitHub_Repository",
              nameWithOwner: "robinmetral/gatsby-starter-robin",
              description:
                "Gatsby Default Starter with state-of-the-art tooling :art:",
              primaryLanguage: {
                color: "#f1e05a"
              },
              url: "https://github.com/robinmetral/gatsby-starter-robin"
            },
            {
              __typename: "GitHub_Repository",
              nameWithOwner: "robinmetral/gatsby-source-s3",
              description:
                "A Gatsby plugin to source objects and images from AWS S3",
              primaryLanguage: {
                color: "#2b7489"
              },
              url: "https://github.com/robinmetral/gatsby-source-s3"
            },
            {
              __typename: "GitHub_Repository",
              nameWithOwner: "robinmetral/gatsby-plugin-pinterest",
              description: "Gatsby plugin to add Pinterest's add-on script📍",
              primaryLanguage: {
                color: "#f1e05a"
              },
              url: "https://github.com/robinmetral/gatsby-plugin-pinterest"
            }
          ]
        }
      }
    }
  }
};
