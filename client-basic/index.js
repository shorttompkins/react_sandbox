(function () {
  var React = require('react'),
      App = require('./components/app.jsx'); // Our custom react component

  //Needed for React Developer Tools
  window.React = React;

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<App />, document.body);
})();
