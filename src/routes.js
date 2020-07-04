import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import CreateDriver from './pages/CreateDriver';
import EditDriver from './pages/EditDriver';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={CreateDriver} />
      <Route path="/edit" component={EditDriver} />
    </Switch>
  );
}