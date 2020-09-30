import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {setUser} from './store/auth'
import Profile from './pages/Profile'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@material-ui/core';
import { useDispatch } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
      const loadUser = async () => {
        const res = await fetch("/api/session/current_user");
        if (res.ok) {
          res.data = await res.json(); // current user info
          dispatch(setUser(res.data.user))
          console.log(res.data.user)
        }
      }
      setLoading(false);
      loadUser();
    }, [dispatch]);

  return (
    <>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={SignupPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
