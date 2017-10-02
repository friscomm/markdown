import React, { Component } from 'react';

class FooterSection extends Component {
  render() {
    return(
      <div className="footerIcon">
        <a href={this.props.link}><i class="fa fa-{this.props.name}"></i></a>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

export default FooterSection;
