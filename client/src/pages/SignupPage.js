import React, { useEffect } from 'react';
import {useState} from 'react'
import {signup} from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import {fade,ThemeProvider,withStyles,makeStyles,createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import '../styles/SignupForm.css'

const useStylesSignUpTextField = makeStyles((theme) => ({
  root: {
    border: '2px solid #e2e2e1',
    overflow: 'hidden',
    paddingLeft: "10px",
    paddingTop: "4px",
    paddingBottom: "4px",
    marginTop: "14px",
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    transition: "background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s",
    '&$focused': {
      border: '2px solid rgb(94, 158, 214)',
      backgroundColor: '#fff',
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
    },
  },
  focused: {},
}));

function SignUpTextField(props) {
  const classes = useStylesSignUpTextField();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

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
        backgroundColor: "#5AAC44",
        color: "white",
        marginTop: "10px",
        textDecoration: "none",
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
  const [userToCreate,setUserToCreate] = useState({})
  const [errors,setErrors] = useState([])

  useEffect(()=>{
    const validateUser= async ()=>{
        const username = userToCreate.username
        const email = userToCreate.email
        const password = userToCreate.password
        const data = await dispatch(signup(username,email,password))
        if (data){
            setErrors(Object.values(data.errors))
            console.log(data.errors)
        }
    }
    if (userToCreate !== {}){
        validateUser()
    }
  },[userToCreate])

const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword){
      setUserToCreate({username,email,password})
    } else {
      const passwordError = "the passwords do not match"
      if (!errors.includes(passwordError))
        setErrors([...errors, passwordError ])
    }
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
        <Divider style={{width: "100%", margin: "10px"}}/>
        <div style={{color:"red", display: "flex", flexDirection:"column"}}>
          {errors.map((err,i)=>{
            return(
              <p>{errors[i]}</p>
            )
          })}
        </div>
        <form className='signup-form' method="POST" action="/api/session" onSubmit={handleSubmit}>
          <SignUpTextField InputLabelProps={{style: {color: "grey"}}} type="text" size="medium" placeholder="username" name="username" value={username} onChange={handleUsernameInput} />
          <SignUpTextField InputLabelProps={{style: {color: "grey"}}} type="text" size="medium" placeholder="email" name="email" value={email} onChange={handleEmailInput} />
          <SignUpTextField InputLabelProps={{style: {color: "grey"}}} type="password" size="medium" placeholder="password" name="password" value={password} onChange={handlePasswordInput} />
          <SignUpTextField InputLabelProps={{style: {color: "grey"}}} style={{color:"red"}} type="password" size="medium" placeholder="confirm password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordInput} />
          <Button size="small" classes={{ root: classes.Button }} type="submit">Sign Up and Log In</Button>
        </form>
        <Divider style={{width: "100%", margin: "10px"}}/>
        <NavLink id='login-navlink' to="/login"><p id="signUpText">Already have an account?  Log In</p></NavLink> 
      </Container>
      </div>
    </>
  )
}

export default SignupPage;
