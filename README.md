# React Sanbox App

The point of this app is to experiment with learning react and setting up a good
base application repo that can be easily forked for new projects down the road.

## Build Process

```bash
$ gulp
$ open http://localhost:1337
```

Runs gulp in watch mode, which will watch for changes and perform a Browserify
transformation process.  This includes:

 * clean
 * browserify
 * babel transofmration (for ES6)
 * bundling to `app.js`
 * watchers
