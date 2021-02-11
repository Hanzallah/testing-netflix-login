import React from 'react';
import { Home, SignIn, SignUp,Forgot } from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
  const HOME = '/';
  const SIGN_UP = '/signup';
  const SIGN_IN = '/signin';
  const FORGOT = '/forgot';

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
      <Route exact path={FORGOT}>
        <Forgot/>
      </Route>
    </Router>
  );
}


