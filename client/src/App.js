import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';



const App = () => (
  <div>
    <Switch>
    <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
