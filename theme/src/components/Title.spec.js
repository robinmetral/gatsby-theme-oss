import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

describe("Title component spec", () => {
  it("should display the title text", () => {
    const TITLE = "gatsby-theme-oss";
    const { getByTestId } = render(<Title title={TITLE} />);

    expect(getByTestId("title")).toHaveTextContent(TITLE);
  });
});
