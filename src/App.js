import React, { Component } from 'react';
import './App.css';
import Wrapper from './wrapper.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer in React</h2>
        </div>
        <div>
          <Wrapper id='onRight' />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
