import React, { useEffect } from 'react';
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
import Cookies from 'js-cookie'

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

const ColorButton = withStyles((theme) => ({
    root: {
        color: "white",
        paddingRight: "10px",
        paddingLeft: "10px",
        backgroundColor:"grey",
        '&:hover': {
            backgroundColor: "#2196f3 !important",
        },
    },
}))(Button);

function LoginPage() {
    const classes = useStyles()

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.auth.user)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [userToLogin,setUserToLogin] = useState({})
    const [errors,setErrors] = useState("")


    useEffect(()=>{
        const validateUser= async ()=>{
            const username = userToLogin.username
            const password = userToLogin.password
            if (username && password) {
                const data = await dispatch(login(username,password))
                if (data){
                    setErrors(data.errors)
                }
            }
        }
        if (userToLogin !== {}){
            validateUser()
        }
    },[userToLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setUserToLogin({username,password})
    }

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    if (currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <>
            <div id="main-content-login">
                <Container fixed maxWidth="sm" 
                classes={{root: classes.container}}>
                    <h1 className="login-and-signup-header">Welcome to Jello</h1>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <ColorButton size="small">Login As a Demo User</ColorButton>
                    </div>
                    <Divider style={{width: "100%", margin: "10px"}}/>
                    <div style={{color:"red"}}>
                        {errors}
                    </div>
                    <form className='login-form' method="PUT" action="/api/session" onSubmit={handleSubmit}>
                        <div id='login-form-fields' style={{width:"100%", display:"flex", flexDirection: "column"}}>
                            <LoginTextField InputLabelProps={{style: {color: "grey"}}} type="text" placeholder="username" size="medium" name="password" value={username} onChange={handleUsernameInput} />
                            <LoginTextField InputLabelProps={{style: {color: "grey"}}} type="password" placeholder="password" size="medium" name="password" value={password} onChange={handlePasswordInput} />
                        </div>
                        <Button size="small" classes={{ root: classes.Button }} type="submit">Log in</Button>
                    </form>
                    <Divider style={{width: "100%", margin: "24px"}}/>
                    <NavLink id='signup-navlink' to="/signup"><p className="is-white" id="signUpText">Don't have an account?  Sign Up</p></NavLink>
                </Container>
            </div>
        </>
    )

}

export default LoginPage;
