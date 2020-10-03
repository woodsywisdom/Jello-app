import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginNavbar from '../components/LoginNavbar';
import Habits_Book_Trello from '../images/Habits_Book_Trello.png';

const useStyles = makeStyles({
    blueBox: {
        color: 'white',
        backgroundColor: "#0079bf",
        height: '100vh',
    },
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Charlie Text,sans-serif",
    },
    textHeader: {
        fontWeight: '600',
        fontFamily: "Charlie Text,sans-serif",
    },
    pText: {
        fontSize: '20px',
        marginTop: '10px',
    },
    container2: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '90%',
        paddingTop: '48px',
    },
    media2: {
        maxWidth: '40%',
        borderRadius: '10px',
    },
    innerTextContainer2: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '30px',
        marginLeft: '0',
        marginRight: '0',
    },
    container3: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '90%',
        marginTop: '48px',
        borderRadius: '10px',
        background: 'linear-gradient(180deg, #42548e 0%, #6b668c 100%)',
        height: '70vh'
    }
});

function Home() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.outerContainer}>
                <Container className={classes.blueBox}>
                    <Typography variant='h1'>
                        Trello helps teams work more collaboratively and get more done.
                    </Typography>
                    <Typography variant='h2'>
                        Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.
                    </Typography>
                </Container>

                <Container className={classes.container2}>
                    <img src={Habits_Book_Trello} className={classes.media2} />
                    <Container className={classes.innerTextContainer2}>
                        <Typography variant='h4' className={classes.textHeader}>
                            Information at a glance
                        </Typography>
                        <p className={classes.pText}>
                            Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.
                        </p>
                    </Container>
                </Container>

                <Container className={classes.container3}>
                    <Typography variant='h2'>
                        This is a test of the container layout
                    </Typography>
                </Container>
                <Container>

                </Container>

                <Container>
                    <Typography variant='h2'>
                        This is a test of the container layout
                    </Typography>


                </Container>
            </Box>
        </>
    )

}
export default Home;
