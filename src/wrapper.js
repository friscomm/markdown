import React, { Component } from 'react';
import InputBox from './inputBox.js';
let Remarkable = require('remarkable');
let md = new Remarkable();

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "New text will show up here once you change the text in the other box"};
    this.changeText = this.changeText.bind(this);
  }

  getMarkdown() {
    let markedText = { __html: md.render(this.state.value) };
    return markedText;
  }

  changeText(newText) {
    this.setState({
      value: newText
    });
  }

  render() {
    return (
      <div>
        <div id={this.props.id}>
          <div dangerouslySetInnerHTML={this.getMarkdown()}></div>
        </div>
        <InputBox changeText={this.changeText} id='onLeft'/>
      </div>
    );
  }
}

export default Wrapper;
