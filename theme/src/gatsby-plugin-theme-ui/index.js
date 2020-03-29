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
  fontSizes: [14, 16, 24, 36],
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [64, 128, 256, 512, 1024],
  radii: [2, 4, 8, 16, 99999],
  styles: {
    a: {
      color: "primary",
      textDecoration: "none"
    },
    p: {
      fontFamily: "body",
      lineHeight: "body",
      margin: 0,
      textAlign: "center"
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      margin: 0,
      textAlign: "center"
    }
  }
});
