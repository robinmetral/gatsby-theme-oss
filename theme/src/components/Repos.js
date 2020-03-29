/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid } from "@theme-ui/components";

import Repo from "./Repo";

const Repos = ({ repos }) => {
  return (
    <Grid
      sx={{ maxWidth: 5, mx: "auto", px: [2, 3] }}
      gap={[3, 4]}
      columns={[1, 2]}
    >
      {repos.map((repo, key) => (
        <Repo repo={repo} key={key} />
      ))}
    </Grid>
  );
};

export default Repos;
