import baseTheme from "gatsby-theme-oss/src/gatsby-plugin-theme-ui";
import { merge } from "lodash";

export default merge({}, baseTheme, {
  colors: {
    text: "#201e33",
    background: "white",
    primary: "#ff5556"
  },
  fonts: {
    body: "Helvetica, Arial, sans-serif",
    heading: "Helvetica, Arial, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 300,
    heading: 300,
    bold: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [64, 128, 256, 512, 768, 960],
  radii: [2, 4, 8, 16, 99999],
  styles: {
    root: {
      p: 0
    },
    a: {
      color: "primary",
      textDecoration: "none"
    },
    p: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [3, 4],
      textAlign: "center"
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [5, 6],
      textAlign: "center"
    }
  }
});
