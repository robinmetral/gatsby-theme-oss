# gatsby-starter-under-construction

Blazing fast "Under Construction" page with a blazing quick setup.


## Features

- Configure everything in `gatsby-config.js`
- Creative CSS3 background patterns by [Lea Verou](https://github.com/LeaVerou/css3patterns)
- Built-in Google Fonts support
- Social icons with [`react-social-icons`](https://github.com/jaketrent/react-social-icons)
- `react-transition-group` transitions


## Setup

Simply edit the `siteMetadata` variables in `gatsby-config.js`:

```javascript
module.exports = {
  siteMetadata: {
    // choose a title (also the page's `<title>`)
    title: "Hi, looking for a starter? 🔎",
    // choose a message to display below the comment
    message: "🚧 Host me on your domain while you build your new Gatsby site! (or keep me longer, that's fine too) 👷",
    // choose a pattern (see https://gatsby-starter-under-construction.netlify.com/patterns)
    pattern: "Seigaiha",
    // choose a color for your text and icons
    color: "#4c4c4c",
    // choose a Google Font for the title
    headingFont: "Lobster",
    // choose a Google Font for the message
    textFont: "Montserrat",
    // display social icon links by adding your social urls to the array
    social: ["https://github.com/robinmetral/gatsby-starter-under-construction", "https://twitter.com/robinmetral"],
  },
}
```


## Licence

MIT
