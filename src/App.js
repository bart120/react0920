import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import RoomAddPage from './pages/rooms/RoomAddPage';
import Routes from './router/Routes';

class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Container fixed className="layout-fix">
            <Routes></Routes>
          </Container>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;