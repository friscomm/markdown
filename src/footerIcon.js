import React, { Component } from 'react';
let FontAwesome = require('react-fontawesome');

class FooterSection extends Component {
  render() {
    let iconName = `fa fa-${this.props.name}`;
    return(
      <div className="footerIcon">
        <a href={this.props.link}><i className="fa fa-github"></i></a>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

export default FooterSection;
