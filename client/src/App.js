import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Person from './pages/Person'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@material-ui/core';

function App() {

  return (
    <>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={SignupPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/person' component={Person} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
