/** @jsx jsx */
import { Fragment } from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import { Helmet } from "react-helmet";

import Repos from "../components/Repos";
import IllustrationSvg from "../components/IllustrationSvg";

const IndexPage = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { hasPinnedItems, items } = data.github.user.itemShowcase;

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={title + "&middot" + subtitle} />
        <title>{title}</title>
      </Helmet>
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh"
        }}
      >
        <div />
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 5,
            mx: "auto",
            px: [3, 4]
          }}
        >
          <Styled.h1 data-testid="title">{title}</Styled.h1>
          <Styled.p data-testid="subtitle">{subtitle}</Styled.p>
        </div>
        <IllustrationSvg sx={{ flexShrink: 0 }} />
      </section>
      {hasPinnedItems ? (
        <section sx={{ py: [4, 5] }}>
          <Styled.h1 sx={{ mb: [4, 5] }}>Projects</Styled.h1>
          <Repos repos={items.nodes} />
        </section>
      ) : (
        <p>Pin repositories on GitHub to showcase them here!</p>
      )}
    </Fragment>
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
