import React from 'react';
// import Header from './components/Header';
import Home from './pages/Home';
import Users from './pages/Users';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/css/App.scss';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
