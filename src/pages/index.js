import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/main.css"

const IndexPage = ({ data }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ data.site.siteMetadata.title } | { data.site.siteMetadata.description }</title>
      <link rel="stylesheet" href={ "https://fonts.googleapis.com/css?family=" + data.site.siteMetadata.typeface } />
    </Helmet>
    <h1
      style={{
        fontFamily: data.site.siteMetadata.typeface,
      }}
    >{ data.site.siteMetadata.message }</h1>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        message
        typeface
      }
    }
  }
`
