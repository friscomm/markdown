import React, { Component } from 'react';
import FooterIcon from './footerIcon.js';

class Footer extends Component {
  render() {
    return(
      <div className="App-footer">
        <FooterIcon link="https://github.com/friscomm" name="github"/>
      </div>
    )
  }
}

export default Footer;
