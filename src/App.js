import React from 'react';
import './App.css';
import Users from './Users/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import NoMatch from './components/noMatch/NoMatch';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Users></Users>
          </Route>
          <Route path='/id/:id'>
            <PostDetails></PostDetails>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
