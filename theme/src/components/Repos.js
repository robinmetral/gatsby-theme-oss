import React from "react";
import { Grid } from "@theme-ui/components";

import Repo from "./Repo";

const Repos = ({ repos }) => {
  return (
    <Grid gap={4} columns={[1, 2, 3]}>
      {repos.map((repo, key) => (
        <Repo repo={repo} key={key} />
      ))}
    </Grid>
  );
};

export default Repos;
