(function () {
  var React = require('react'),
      App = require('./components/app');

  //Needed for React Developer Tools
  window.React = React;

  React.render(<App />, document.body);
})();
