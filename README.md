# isomorphic-react
## Server Side React and Client Side React

Install and start it up!
```bash
reyarqueza@rey-mac : ~/isomorphic-react
$ npm install
$ npm start
```

## Development

Open up 3 terminals and run the following npm scripts:

### Run the Express server
```bash
reyarqueza@rey-mac : ~/isomorphic-react
$ npm start
```

### Run the javascript build watcher
```bash
reyarqueza@rey-mac : ~/isomorphic-react
$ npm run client-side-react-dev
```

### Run the Sass compile watcher (Dart with @use support)
```bash
reyarqueza@rey-mac : ~/isomorphic-react
$ npm run sass-watch
```

## Production
To create a minified production build:
```bash
reyarqueza@rey-mac : ~/isomorphic-react
$ npm run build
```

## The Secret (Not) Sauce
* ReactDOMServer - https://reactjs.org/docs/react-dom-server.html
* ReactDOM.hydrate - https://reactjs.org/docs/react-dom.html#hydrate
* Redux Server Rendering - https://redux.js.org/recipes/server-rendering
