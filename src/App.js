import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowDetailPage from './pages/ShowDetailPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/detail" component={ShowDetailPage} />
    </Switch>
  );
}

export default App;
