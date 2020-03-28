/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Repo = ({ repo }) => (
  <Styled.a
    href={repo.url}
    sx={{
      /* general styles */
      color: "text",
      p: 3,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px 0px",
      borderRadius: 2,
      /* children positioning */
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
    <Styled.h1 sx={{ fontSize: 1 }}>{repo.nameWithOwner}</Styled.h1>
    <Styled.p>{repo.description}</Styled.p>
  </Styled.a>
);

export default Repo;
