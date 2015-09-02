var React = require('React'),
    People = require('./people.jsx');

module.exports = React.createClass({
  render: function() {
    return (
        <div>
          Hello world!
          <hr />
          <People />
        </div>
      )
  }
});
