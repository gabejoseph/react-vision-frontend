import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
// import Map from './components/Map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
      <div className="app" >
        <Router >
          <Header />
          <Switch>
            <Home />
          {/* <Map /> */}
            <SearchPage />
          </ Switch>
          <Footer />
        </ Router>


      </div>
  );
}

export default App;