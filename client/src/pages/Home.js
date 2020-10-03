import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginNavbar from '../components/LoginNavbar';
import Habits_Book_Trello from '../images/Habits_Book_Trello.png';
import little_people_moving from '../images/little_people_moving.jpg'
import pngtree_business_discussion from '../images/pngtree_business_discussion.jpg'
import team_work from '../images/team_work.jpg'

const useStyles = makeStyles({
    blueBox: {
        display: 'flex',
        color: 'white',
        background: 'linear-gradient(135deg, #0079bf, #5067c5)',
        height: 'fit-content',
        minWidth: 'fit-content',
        paddingBottom: '3rem',
        paddingTop: '3rem',
        alignItems: 'center'
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
    media1: {
        width: '50%',
        borderRadius: '10px'
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '90%',
        marginTop: '48px',
        borderRadius: '10px',
        background: 'linear-gradient(180deg, #42548e 0%, #6b668c 100%)',
        height: '70vh',
        color: 'white',
        height: 'fit-content',
        minWidth: 'fit-content',
        padding: '1.1em'
    },
    companiesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    },
    companies1: {
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: '15px',
        width: 'fit-content%'
    },
    companies2: {
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: '15px',
        width: '100%'
    },
    company1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '5',
        fontSize: "40px",
        // padding: '10px',
        width: '25%',
        textAlign: 'center',
        minWidth: 'fit-content'
    },
    jelcoWholesale: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontSize: '40px',
        width: '25%',
        fontStyle: 'italic'
    },
    company2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        flexShrink: '0',
        fontSize: "40px",
        width: '33%',
        textAlign: 'center',
        minWidth: 'fit-content'
    },
    fakeButton: {
        fontSize: '20px',
        border: '5px double white',
        borderRadius: '35%',
        padding: '20px 40px'
    }
});

function Home() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.outerContainer}>
                <Container className={classes.blueBox}>
                    <div>
                        <Typography variant='h3'>
                            Trello helps teams work more collaboratively and get more done.
                        </Typography>
                        <p className={classes.pText}>
                            Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.
                        </p>
                    </div>
                    <img src={little_people_moving} className={classes.media1} />
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
                    <Typography variant='h4' className={classes.textHeader}>
                        Work smarter with Jello
                    </Typography>
                    <p className={classes.pText}>
                        Companies of all shapes and sizes use Jello.
                    </p>
                    <Container className={classes.companiesContainer}>
                        <Container className={classes.companies1}>
                            <p className={classes.company1} >
                                Jell-oogle
                            </p>
                            <p className={classes.company1} style={{fontFamily: 'Brush Script MT'}}>
                                Jellnder
                            </p>
                            <p className={classes.company1} style={{fontSize: '30px', fontFamily: 'Lucida Console'}}>
                                JELLOSPACE
                            </p>
                            <div className={classes.jelcoWholesale}>
                                <p style={{fontFamily: 'Franklin Gothic Medium', marginBottom: '0'}}>
                                    JELLCO
                                </p>
                                <p style={{fontSize: '.4em', marginTop: '-1em'}}>
                                    WHOLESALE
                                </p>
                            </div>
                        </Container>
                        <Container className={classes.companies2}>
                            <p className={classes.company2} style={{fontFamily: 'Impact'}}>
                                JELLORUSH
                            </p>
                            <p className={classes.company2} style={{fontFamily: 'Lucida Handwriting'}}>
                                Jintrest
                            </p>
                            <p className={classes.company2} style={{fontFamily: 'Consolas'}}>
                                JELLOTON
                            </p>
                        </Container>
                    </Container>
                    <p className={classes.fakeButton}>
                        We can show you how
                    </p>
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

// linear-gradient(to bottom, #fff 0%, #f7ecff 46%, #d2ecff 74%, #fff 100%)
