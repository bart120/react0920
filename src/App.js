import { Container } from '@material-ui/core';
import React, { Component } from 'react';

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container fixed className="layout-fix">

        </Container>
        <Footer />
      </div>
    );
  }

}

export default App;
