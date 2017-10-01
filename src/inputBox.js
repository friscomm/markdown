import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "The changes will happen here"};
  }

  render() {
    return (
      <div id={this.props.id}>
        <textarea ref="inputText" onChange={() => this.props.changeText(this.refs.inputText.value)} rows='28' cols='55'>{this.state.value}</textarea>
      </div>
    );
  }
}

export default InputBox;
