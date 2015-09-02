var React = require('React'),
    _ = require('lodash'),
    Person = require('./person.jsx');

var MyMixins = {
  getInitialState: function() {
    return {
      people: []
    }
  },

  addPerson: function(e) {
    this.setState({
      people: this.state.people.concat(this.refs.person.getDOMNode().value)
    });
  }
};

module.exports = React.createClass({

  mixins: [MyMixins],

  render: function() {
    return (
        <div>
          <input type="text" ref="person" placeholder="Enter a person" /> <button onClick={ this.addPerson }>Add</button>
          <br/>
          <ul>
          {
            _.map(this.state.people, function(person, i) {
              return (
                  <Person name={ person } key={ i } />
                )
            })
          }
          </ul>
        </div>
      )
  }
});
