import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './containers/SearchPage'
// import Map from './components/Map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Login from './containers/Login'



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
            <Route path="/login" >
              <Login />
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