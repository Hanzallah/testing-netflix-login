import React from 'react';
import { Home, SignIn, SignUp, Forgot, Main } from './pages';
import { Router, Route, Switch } from 'react-router-dom';
import history from "./pages/history"
import IdleTimerContainer from './components/IdleTimerContainer';

export default function App() {
  const HOME = '/';
  const SIGN_UP = '/signup';
  const SIGN_IN = '/signin';
  const FORGOT = '/forgot';
  const MAIN = '/main';
  const TIMER = '/timer';

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route exact path={SIGN_UP}>
          <SignUp />
        </Route>
        <Route exact path={SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={FORGOT}>
          <Forgot />
        </Route>
        <Route exact path={MAIN}>
          <Main />
        </Route>
        <Route exact path={TIMER}>
          <IdleTimerContainer />
        </Route>
      </Switch>
    </Router>
  );
}


