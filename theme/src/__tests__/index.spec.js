import React from "react";
import { render } from "@testing-library/react";

import IndexPage from "../pages/index";
import INDEX_PAGE_QUERY from "../__fixtures__/index-page-query";

describe("index page spec", () => {
  it("should render the title", () => {
    const { getByTestId } = render(<IndexPage data={INDEX_PAGE_QUERY} />);

    expect(getByTestId("title")).toHaveTextContent(
      INDEX_PAGE_QUERY.site.siteMetadata.title
    );
  });
  it("should render the subtitle", () => {
    const { getByTestId } = render(<IndexPage data={INDEX_PAGE_QUERY} />);

    expect(getByTestId("subtitle")).toHaveTextContent(
      INDEX_PAGE_QUERY.site.siteMetadata.subtitle
    );
  });
});
