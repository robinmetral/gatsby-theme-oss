import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Title from "../components/Title";
import Message from "../components/Message";
import Repos from "../components/Repos";

const IndexPage = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { hasPinnedItems, items } = data.github.user.itemShowcase;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={title + "&middot" + subtitle} />
        <title>{title}</title>
      </Helmet>
      <Title title={title} />
      <Message message={subtitle} />
      {hasPinnedItems ? (
        <Repos repos={items.nodes} />
      ) : (
        <p>Pin repositories on GitHub to showcase them here!</p>
      )}
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query($github_username: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    github {
      user(login: $github_username) {
        itemShowcase {
          hasPinnedItems
          items(first: 6) {
            nodes {
              ... on GitHub_Repository {
                nameWithOwner
                description
                primaryLanguage {
                  color
                }
                url
              }
            }
          }
        }
      }
    }
  }
`;
