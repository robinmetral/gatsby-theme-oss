import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { hasPinnedItems, items } = data.github.user.itemShowcase;

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
      {hasPinnedItems ? (
        <ul>
          {items.nodes.map(repo => (
            <li key={repo.nameWithOwner}>
              <a href={repo.url}>
                <p>{repo.nameWithOwner}</p>
                <p>{repo.description}</p>
                <p style={{ backgroundColor: repo.primaryLanguage.color }}>
                  Language: {repo.primaryLanguage.name}
                </p>
                <p>Stars: {repo.stargazers.totalCount}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Pin repositories on GitHub to showcase them here!</p>
      )}
    </div>
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
                  name
                }
                stargazers {
                  totalCount
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
