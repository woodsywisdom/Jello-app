import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#0079bf',
        height: '72 px',
    },

    login: {
        color: 'white',
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    logo: {
        color: "white",
        textDecoration: "none",
        fontFamily: "Brush Script MT",
        fontSize: "40px",
        padding: "0",
        margin: "0",
    },

    icon: {
        fontSize: "40px",
        paddingTop: "15px",
        margin: "0",
    }
})

function LoginNavbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.navbar} position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Box>
                        <NavLink className={classes.logo} to="/">
                            <TableChartOutlinedIcon className={classes.icon}/>
                            Jello
                        </NavLink>
                    </Box>
                    <Box className={classes.topRight}>
                        <Button className={classes.login} variant="text">
                            <Link href="/login" className={classes.login}>Log in</Link>
                        </Button>
                        <Button variant="contained">
                            <Link href="/signup">Sign up</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )

}
export default LoginNavbar;
