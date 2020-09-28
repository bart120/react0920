import React, { Component } from 'react';

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }

}

export default App;
