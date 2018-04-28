import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import FilmsContainer from './FilmsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Switch>
          <Route exact path= '/:characterId' render={(props)=><FilmsContainer {...props} />} />
          <Route exact path= '/' render={(props)=><Home {...props} /> } />          
        </Switch>
      </div>
    );
  }
}

export default App;
