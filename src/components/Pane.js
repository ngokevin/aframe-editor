var React = require('react');
var Pane = require('./Pane');

export default class Pane extends React.Component {
	displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
	render: function () {
  	return (
    	<div>
      	{this.props.children}
      </div>
    );
  }
}
