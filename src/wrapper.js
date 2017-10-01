import React, { Component } from 'react';
import InputBox from './inputBox.js';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "New text will show up here once you change the text in the other box"};
    this.changeText = this.changeText.bind(this);
  }

  changeText(newText) {
    console.log(newText);
    this.setState({
      value: newText
    });
  }

  render() {
    return (
      <div>
        <div id={this.props.id}>
          <div>{this.state.value}</div>
        </div>
        <InputBox changeText={this.changeText} id='onLeft'/>
      </div>
    );
  }
}

export default Wrapper;
