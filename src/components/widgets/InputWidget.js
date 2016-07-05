var React = require('react');

export default class InputWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value || ''};
  }

  onChange = e => {
    var value = e.target.value;
    this.setState({value: value});
    if (this.props.onChange)
      this.props.onChange(this.props.entity, this.props.componentname, this.props.name, value);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value != this.state.value) {
      this.setState({value: newProps.value});
    }
  }

  render() {
    return <input type="text" className="string" value={this.state.value} onChange={this.onChange}/>;
  }
}
