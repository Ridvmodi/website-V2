import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import '../styles/app.css'

// components
import HomePage from './HomePage'
import NavBar from './Navbar'
import Footer from './Footer'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="app">
      <NavBar/>
            <header>
        <Header/>
        </header>
      <div className="container mainContent">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route render ={() => (
              <h1>Page not Found!</h1>
            )}/>
        </Switch>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
