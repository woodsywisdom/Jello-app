import React from 'react';
import {useState} from 'react'
import {login} from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import {fade,ThemeProvider,withStyles,makeStyles,createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import '../styles/LoginForm.css'

const useStylesLoginTextField = makeStyles((theme) => ({
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

  function LoginTextField(props) {
    const classes = useStylesLoginTextField();
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

const useStyles = makeStyles((theme)=> ({
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
        margin: "10px",
        backgroundColor: "#EDEFF0",
        '&:hover': {
            backgroundColor: '#fff',
          },
    },
    margin: {
        margin: theme.spacing(1),
    },
    Button: {
        marginTop: "10px",
        backgroundColor: "#5AAC44",
        color: "white",
        '&:hover': {
            backgroundColor: "#61BD4F",
        }
    },
    signUpButton: {
        background: "transparent",
        color: "grey",
        border: "1px solid grey",
        textTransform: "none",
        textDecoration: "none",
        fontSize: "13px",
        margin: "5px"
    }
}))

function LoginPage() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(username,password))
    }

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div id="main-content-login">
                <Container fixed maxWidth="sm" 
                classes={{root: classes.container}}>
                    <h1 className="login-and-signup-header">Log in to Jello</h1>
                    <form className='login-form' method="PUT" action="/api/session" onSubmit={handleSubmit}>
                        <div id='login-form-fields' style={{width:"100%", display:"flex", flexDirection: "column"}}>
                            <LoginTextField InputLabelProps={{style: {color: "grey"}}} type="text" placeholder="username" size="medium" name="password" value={username} onChange={handleUsernameInput} />
                            <LoginTextField InputLabelProps={{style: {color: "grey"}}} type="password" placeholder="password" size="medium" name="password" value={password} onChange={handlePasswordInput} />
                        </div>
                        <Button size="small" classes={{ root: classes.Button }} type="submit">Log in</Button>
                    </form>
                    <Divider style={{width: "100%", margin: "10px"}}/>
                    <NavLink id='signup-navlink' to="/signup"><p className="is-white" id="signUpText">Don't have an account?  Sign Up</p></NavLink>
                </Container>
            </div>
        </>
    )

}

export default LoginPage;
