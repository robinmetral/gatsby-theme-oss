import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={title + "&middot" + subtitle} />
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
