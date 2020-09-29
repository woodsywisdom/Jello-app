import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import LoginNavbar from './components/LoginNavbar';
import Boards from './pages/Boards';
import { AuthRoute, ProtectedRoute } from './components/utils/Routes';

function App() {
  const currentUser = useSelector(state => state.auth.user);

  // useEffect(() => {

  // }, [dispatch, userID])

  return (
    <>
        <CssBaseline/>
        <BrowserRouter>
            { currentUser.id ? <Navbar/> : <LoginNavbar /> }
            <Switch>
                <AuthRoute exact path='/' component={Home} currentUserId={currentUser.id}/>
                <AuthRoute exact path='/signup' component={SignupPage} currentUserId={currentUser.id}/>
                <AuthRoute exact path='/login' component={LoginPage} currentUserId={currentUser.id}/>
                <ProtectedRoute exact path='/users/:userid/boards' component={Boards} currentUserId={currentUser.id}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
