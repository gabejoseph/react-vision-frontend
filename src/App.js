import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './containers/SearchPage'
import Login from './containers/Login'

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
              <Route path="/login" >
                <Login />
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
  return {
    items: state.items
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);