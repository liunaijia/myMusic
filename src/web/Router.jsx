import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Components from './Components';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/components" component={Components} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
