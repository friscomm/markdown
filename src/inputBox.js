import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Frisco Miranda](https://freecodecamp.com/friscomm)*'};
  }

  render() {
    return (
      <div id={this.props.id}>
        <textarea ref="inputText" onChange={() => this.props.changeText(this.refs.inputText.value)} rows='38' cols='55'>{this.state.value}</textarea>
      </div>
    );
  }
}

export default InputBox;
