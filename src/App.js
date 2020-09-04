import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
// import Map from './components/Map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';



function App() {
  return (
      <div className="app" >
        <Router >

          <Header />

          <Switch>
            <Route path="/search" >
              <SearchPage />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
          </ Switch>

          {/* <Map /> */}


          <Footer />

        </ Router>


      </div>
  );
}

const mapStateToProps = state => {
  return ({
    cats: state.cats
  })
}

export default connect(mapStateToProps, null)(App)