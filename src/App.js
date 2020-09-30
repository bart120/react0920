import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Routes from './router/Routes';

import './conf/translation';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

class App extends Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Container fixed className="layout-fix">
              <Routes></Routes>
            </Container>
          </BrowserRouter>
          <Footer />
        </Provider>
      </>
    );
  }
}

export default App;