export default function (content, preloadedState) {
  return `<!doctype html>
<html lang="en">
  <head>
    <title>Isomorphic Example Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/images/favicon.ico" />
    <link rel="stylesheet" href="/css/styles.min.css" />
    <script defer>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // https://redux.js.org/recipes/server-rendering/#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      "\\u003c"
    )}
    </script>
    <script defer src="/js/bundle.js"></script>
  </head>
  <body>
    <main>${content}</main>
  </body>
</html>`;
}
