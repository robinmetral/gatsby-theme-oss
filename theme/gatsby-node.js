// expose the github username to all pages via context
exports.onCreatePage = (
  { page, actions: { createPage, deletePage } },
  themeOptions
) => {
  // remove page without context
  deletePage(page);
  // create page with context
  createPage({
    ...page,
    context: {
      ...page.context,
      github_username: themeOptions.github_username
    }
  });
};
