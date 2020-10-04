import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    blueBox: {
        color: 'white',
        backgroundColor: "#0079bf",
        height: '1021px',
    },
});

function Home() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.blueBox}>
                <Container >
                    <Typography variant='h1'>
                        Trello helps teams work more collaboratively and get more done.
                    </Typography>
                    <Typography variant='h2'>
                        Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.
                    </Typography>
                </Container>
            </Box>
        </>
    )

}
export default Home;
