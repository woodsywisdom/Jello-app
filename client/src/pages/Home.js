import React from 'react';
import { Box, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginNavbar from '../components/LoginNavbar';
import Habits_Book_Trello from '../images/Habits_Book_Trello.png';
import little_people_moving from '../images/little_people_moving.jpg'
import hiclipart_working from '../images/hiclipart_working.png'
import hiclipart from '../images/hiclipart.png'

const useMediaStyles = makeStyles((theme) => ({
    blueBox: {
        display: 'flex',
        color: 'white',
        background: 'linear-gradient(135deg, #0079bf, #5067c5)',
        height: 'fit-content',
        minWidth: 'fit-content',
        paddingBottom: '3rem',
        paddingTop: '3rem',
        alignItems: 'center',
        [theme.breakpoints.down(700)]: {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    companies1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingTop: '15px',
        width: 'fit-content%',
        [theme.breakpoints.down(700)]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        },
    },
    companies2: {
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: '15px',
        width: '100%',
        [theme.breakpoints.down(700)]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
    },
}));

const useStyles = makeStyles({
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Charlie Text,sans-serif",
        backgroundColor: 'white'
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
        backgroundColor: 'white'
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
    companiesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
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
        padding: '1.1em',
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
    },
    container4: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
        paddingTop: '48px',
        paddingBottom: '48px',
    },
    media3: {
        width: '33%',
        maxWidth: '33%'
    },
    media4: {
        width: '30%',
        marginLeft: '3%'
    },
    container4Div: {
        textAlign: 'center',
        width: '33%',
        maxWidth: '33%',
    }
});

function Home() {
    const classes = useStyles();
    const mediaClasses = useMediaStyles();
    return (
        <>
            <Box className={classes.outerContainer}>
                <Container className={mediaClasses.blueBox}>
                    <div>
                        <Typography variant='h3'>
                            Jello helps teams work more collaboratively and get more done.
                        </Typography>
                        <p className={classes.pText}>
                            Jello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.
                        </p>
                    </div>
                    <img src={little_people_moving} className={classes.media1} />
                </Container>

                <Container className={classes.container2}>
                    <img src={'https://raw.githubusercontent.com/woodsywisdom/Jello-app/master/client/src/images/Habits_Book_Trello.png'} className={classes.media2} />
                    <Container className={classes.innerTextContainer2}>
                        <Typography variant='h4' className={classes.textHeader}>
                            Information at a glance
                        </Typography>
                        <p className={classes.pText}>
                            Dive into the details by adding comments, attachments, due dates, and more directly to Jello cards. Collaborate on projects from beginning to end.
                        </p>
                    </Container>
                </Container>

                <Container style={{ background: 'linear-gradient(to bottom, #fff 0%, #f7ecff 46%, #d2ecff 74%, #fff 100%)'}}>
                    <Container className={classes.container3}>
                        <Typography variant='h4' className={classes.textHeader}>
                            Work smarter with Jello
                        </Typography>
                        <p className={classes.pText}>
                            Companies of all shapes and sizes use Jello.
                        </p>
                        <Container className={classes.companiesContainer}>
                            <Container className={mediaClasses.companies1}>
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
                            <Container className={mediaClasses.companies2}>
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

                    <Container className={classes.container4}>
                        <img src={hiclipart_working} className={classes.media3} />
                        <div className={classes.container4Div}>
                            <Typography variant='h4' style={{fontWeight: '600'}}>
                                Start Planning Today
                            </Typography>
                            <p className={classes.pText}>
                                Sign up and join over 1,000,000 teams worldwide who are using Jello to get more done.
                            </p>
                        </div>
                        <img src={hiclipart} className={classes.media4} style={{maxHeight: '50vh'}} />
                    </Container>

                </Container>
            </Box>
        </>
    )

}
export default Home;
