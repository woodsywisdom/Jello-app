import React from 'react';
import {useState} from 'react'
import {signup} from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../styles/SignupForm.css'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        height: "100%",
        padding: "30px",
        boxShadow: "rgba(0,0,0,0.1) 0 0 10px"
    },
    TextField: {
        margin: "10px"
    },
    Button: {
        justifySelf: "left",
        margin: "10px",
        backgroundColor: "#5AAC44",
        color: "white",
        '&:hover': {
            backgroundColor: "#61BD4F",
        }
    },
    logInButton: {
        background: "transparent",
        color: "grey",
        border: "1px solid grey",
        textTransform: "none",
        fontSize: "13px",
        margin: "5px"
    }
})
//TODO: Validate unique username and email, validate confirm password === password

function SignupPage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [email,setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(username, email, password))
  }
  
  const handleUsernameInput = (e) => {
      setUsername(e.target.value)
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }
  
  const handleConfirmPasswordInput = (e) => {
      setConfirmPassword(e.target.value)
  }

  return (
    <> 
      <div id="main-content-sign-up">
      <Container fixed maxWidth="sm" classes={{root: classes.container}}>
        <h1 className="login-and-signup-header">Sign up for your account</h1>
        <form className='signup-form' method="POST" action="/api/session" onSubmit={handleSubmit}>
          <TextField classes={{ root: classes.TextField }} id="outlined" label="username" type="text" name="username" variant="outlined" value={username} placeholder="username" onChange={handleUsernameInput} />
          <TextField classes={{ root: classes.TextField }} id="outlined" type="text" label="email" name="email" value={email} placeholder="email" variant="outlined" onChange={handleEmailInput} />
          <TextField classes={{ root: classes.TextField }} id="outlined" type="password" label="password" name="password" value={password} placeholder="password..." variant="outlined" onChange={handlePasswordInput} />
          <TextField classes={{ root: classes.TextField }} id="outlined" type="password" label="confirm password" name="confirmPassword" value={confirmPassword} placeholder="confirm password..." variant="outlined" onChange={handleConfirmPasswordInput} />
          <Button variant="outlined" classes={{ root: classes.Button }} type="submit">Sign Up</Button>
        </form>
        <NavLink id='login-navlink' style={{ textDecoration: "none", color:"blue"}} to="/login"><p id="signUpText">Already have an account?  Log In</p></NavLink> 
      </Container>
      </div>
    </>
  )
}

export default SignupPage;
