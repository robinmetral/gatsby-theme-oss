/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Repo = ({ repo }) => (
  <Styled.a
    href={repo.url}
    sx={{
      /* general styles */
      color: "text",
      px: 4,
      py: 3,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px 0px",
      borderRadius: 2,
      /* children positioning */
      display: "flex",
      flexDirection: "column",
      /* color-filled pseudo-element */
      position: "relative",
      overflow: "hidden",
      "::before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        background: repo.primaryLanguage.color
      }
    }}
  >
    <h1
      sx={{
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "bold",
        fontSize: [2, 3],
        m: 0
      }}
    >
      {repo.nameWithOwner}
    </h1>
    <p
      sx={{
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
        fontSize: [2, 3],
        my: 2
      }}
    >
      {repo.description}
    </p>
  </Styled.a>
);

export default Repo;
