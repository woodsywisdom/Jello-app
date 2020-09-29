import React from 'react';
import {useState} from 'react'
import {login} from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../styles/LoginForm.css'

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
    signUpButton: {
        background: "transparent",
        color: "grey",
        border: "1px solid grey",
        textTransform: "none",
        textDecoration: "none",
        fontSize: "13px",
        margin: "5px"
    }
})

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
                        <TextField classes={{ root: classes.TextField }} id="outlined" label="username" type="text" name="username" variant="outlined" value={username} placeholder="Enter username or email" onChange={handleUsernameInput} />
                        <TextField classes={{ root: classes.TextField }} id="outlined" type="password" label="password" name="password" value={password} placeholder="password..." variant="outlined" onChange={handlePasswordInput} />
                        </div>
                        <Button variant="outlined" classes={{ root: classes.Button }} type="submit">Log in</Button>
                    </form>
                    <NavLink id='signup-navlink' style={{textDecoration:"none", color:"grey"}} to="/signup"><p className="is-white" id="signUpText">Don't have an account?  <Button classes={{ root: classes.signUpButton }} size="medium" variant="outlined">Sign Up</Button></p></NavLink>
                </Container>
            </div>
        </>
    )

}

export default LoginPage;
