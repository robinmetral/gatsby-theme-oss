# Under Construction

Blazing fast "Under Construction" page with a blazing quick setup.

- [:fire: Features](#fire-features)
  - [:rocket: Blazing fast setup](#rocket-blazing-fast-setup)
  - [:trophy: Lightouse scores](#trophy-lighthouse-scores)
  - [:abc: Built-in Google Fonts support](#abc-built-in-google-fonts-support)
  - [:nail_care: CSS3 background patterns](#nail_care-css3-background-patterns)
  - [:link: Social icons](#link-social-icons)
  - [:dizzy: Transitions](#dizzy-transitions)
- [:truck: Development](#truck-development)
  - [:hammer: Licence](#hammer-licence)

---

# :fire: Features

## :rocket: Blazing fast setup

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

## :trophy: Lighthouse scores

![Lightouse scores screenshot](https://raw.githubusercontent.com/robinmetral/gatsby-starter-under-construction/master/20190414-lighthouse-screenshot.png)

Performance is only hindered by Google Fonts being hosted on Google's CDN. If you don't need to change fonts often, consider self-hosting your webfonts.

## :abc: Built-in Google Fonts support

## :nail_care: CSS3 background patterns

CSS3 background patterns by [Lea Verou](https://github.com/LeaVerou/css3patterns)

## :link: Social icons

Social icons with [`react-social-icons`](https://github.com/jaketrent/react-social-icons)

## :dizzy: Transitions

`react-transition-group` transitions

---

# :truck: Development

## :hammer: Licence

MIT
