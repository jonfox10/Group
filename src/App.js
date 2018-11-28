import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import UserHome from './Components/User/UserHome'
import GameControl from './Components/Game/GameControl'
import GameDisplay from './Components/Game/GameDisplay'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/userhome' component={UserHome} />
          <Route path='/gamecontrol' component={GameControl} />
          <Route path='/gamedisplay' component={GameDisplay} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
