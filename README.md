# React Sanbox App

The point of this app is to experiment with learning react and setting up a good
base application repo that can be easily forked for new projects down the road.

## Dependencies & Initial Setup

```bash
$ npm install -g gulp
```

```bash
$ npm install
```

## Build Process

```bash
$ gulp
$ open http://localhost:1337
```

Runs gulp in watch mode, which will watch for changes and perform a Browserify
transformation process.  This includes:

 * clean
 * browserify
 * babel transformation (for ES6)
 * bundling to `app.js`
 * watchers


### Client

The `client` dir is the main folder referenced in the `gulpfile.js`.  As such all
of the client files should reside there.  The other directories `client-` are different
versions of the app in various stages of its life.  For example `client-basic` is just that,
an extremely basic React app.  `client-flux` is after Flux was introduced.  The main
`client` folder is where the final ES6 version of the app resides.
