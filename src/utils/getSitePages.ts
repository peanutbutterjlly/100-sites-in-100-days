/**
 * Returns an object containing the route and title for a given page path.
 * @param page The path to the page
 * @returns An object containing the route and title, or undefined if invalid
 */
export function getSitePages(page: string) {
  const pathPieces = page.split('/');
  const fileName = pathPieces.pop()?.replace('.astro', '');

  if (!fileName) return undefined;

  const title = fileName.replace(/-|_/g, ' ');

  return {
    route: `/sites/${fileName}`,
    title,
  };
}
