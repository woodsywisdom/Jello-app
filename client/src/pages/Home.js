import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#0079bf',
    },
    login: {
        color: 'white',
    },
    topRight: {
        display: "flex",
        width: "auto",
        justifyContent: "flex-end",
    }
})

function Home() {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.navbar} position="sticky">
                <Toolbar>
                    <NavLink className="logo-link" to="/">
                        Trello
                    </NavLink>
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
export default Home;
