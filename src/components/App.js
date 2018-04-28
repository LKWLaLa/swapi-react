import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Switch>
          <Route exact path= '/' render={(props)=><Home {...props} /> } />          
          <Route exact path= '/:character' render={(props)=><FilmsContainer {...props} />} />
        </Switch>
        <Home />
      </div>
    );
  }
}

export default App;
