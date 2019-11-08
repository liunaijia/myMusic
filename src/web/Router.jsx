import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Board from './Board';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ui" component={Board} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
