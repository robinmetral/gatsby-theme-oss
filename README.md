# :construction: Under Construction

Blazing fast [Gatsby](https://gatsbyjs.org) starter with a blazing quick setup.

Deploy in minutes and use as a temporary landing page while you build your Gatsby site.

- [:fire: Features](#fire-features)
  - [:rocket: Blazing quick setup](#rocket-blazing-quick-setup)
  - [:trophy: Lightouse scores](#trophy-lighthouse-scores)
  - [:abc: Built-in Google Fonts support](#abc-built-in-google-fonts-support)
  - [:nail_care: CSS3 background patterns](#nail_care-css3-background-patterns)
  - [:link: Social links](#link-social-links)
  - [:dizzy: Transitions](#dizzy-transitions)
- [:wrench: Usage](#wrench-usage)
  - [:nut_and_bolt: Dependencies](#nut_and_bolt-dependencies)
  - [:arrow_down: Install](#arrow_down-install)
  - [:zap: Setup](#zap-setup)
  - [:moneybag: Licence](#moneybag-licence)

---

## :fire: Features

### :rocket: Blazing quick setup

Deploy in minutes: everything is set up in `gatsby-config.js`.

See [Setup](#zap-setup) for instructions.

### :trophy: Lighthouse scores

![Lightouse scores screenshot](https://raw.githubusercontent.com/robinmetral/gatsby-starter-under-construction/master/20190414-lighthouse-screenshot.png)

Performance is only hindered by Google Fonts being hosted on Google's CDN.

If you don't need to dynamically change typefaces, consider self-hosting webfonts. I recommend [typefaces](https://github.com/KyleAMathews/typefaces) by Kyle Matthews.

### :abc: Built-in Google Fonts support

The Google Font(s) you choose in `gatsby-config.js` will be dynamically imported from Google's CDN.

### :nail_care: CSS3 background patterns

Choose from a selection of [CSS3 background patterns](https://github.com/LeaVerou/css3patterns) by Lea Verou.

The available patterns can be found [here](https://gatsby-starter-under-construction.netlify.com/patterns)

### :link: Social links

Dynamically render social icons with Jake Trent's [react-social-icons](https://github.com/jaketrent/react-social-icons).

### :dizzy: Transitions

Transitions on page rendering with `react-transition-group`.

---

## :wrench: Usage

### :nut_and_bolt: Dependencies

- npm or yarn
- gatsby

### :arrow_down: Install

1. Clone the repository into `my-gatsby-site`
```
git clone https://github.com/robinmetral/gatsby-starter-under-construction.git my-gatsby-site
cd my-gatsby-site
```

2. Install dependencies

| npm | yarn |
------|-------
| `npm install` | `yarn install`  |

3. Start the local server
```
gatsby develop
```

### :zap: Setup

Edit the `siteMetadata` variables in `gatsby-config.js`:

| variable | required? | type | value |
| --- | --- | --- | --- |
| `title` | yes | string (any) | The page's heading and your site's `<title>` |
| `message` | yes | string (any) | The message to display below the heading |
| `pattern` | yes | string (pattern name) | The CSS3 background pattern. See all available patterns at `/patterns` |
| `color` | yes | string (hex color code with #) | The color for text and social icons |
| `headingFont` | yes | string (Google Font name) | The heading's Google Font |
| `textFont` | yes | string (Google Font name) | The message's Google Font |
| `social` | yes | array of url strings | Array of social links, powered by `react-social-icons` |

Example setup:

```javascript
module.exports = {
  siteMetadata: {
    title: "Hi, looking for a starter? 🔎",
    message: "🚧 Host me on your domain while you build your new Gatsby site! (or keep me longer, that's fine too) 👷",
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

### :moneybag: Licence

MIT
