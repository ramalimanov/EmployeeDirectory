import React, { Component } from 'react';
import Home from './utils/Home';
import Header from './components/Header';
import Container from "./components/Container";


function App() {

  
    return (

      <div>
        <Header />
        <Container>
          <Home />
        </Container>
      </div>

    );
 

}

export default App;