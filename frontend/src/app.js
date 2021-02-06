import React from 'react';
import { Home, SignIn, SignUp } from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  const HOME = '/';
  const SIGN_UP = '/signup';
  const SIGN_IN = '/signin';

  return (
    <Router>
      <Route exact path={HOME}>
        <Home/>
      </Route>
      <Route exact path={SIGN_UP}>
        <SignUp/>
      </Route>
      <Route exact path={SIGN_IN}>
        <SignIn/>
      </Route>
    </Router>
  );
}


