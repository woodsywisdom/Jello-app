import { Divider, Grid } from '@material-ui/core';
import React from 'react';


function Footer() {
    return (
        <>
            <footer style={{ marginTop: "10px", backgroundColor: "white" }}>
                <Divider />
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <h3 style={{ margin: "5px" }}>Creators' LinkedIns:</h3>
                        <a href="https://www.linkedin.com/in/besonend/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>Dylan Besonen</a>
                        <div>
                            <a href="https://www.linkedin.com/in/matthew-taylor-3763ba1b8/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>Matthew Taylor</a>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <a href="https://www.linkedin.com/in/will-maccarty-5481991b9/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>Will MacCarty</a>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <h3 style={{ margin: "5px" }}>Repo:</h3>
                        <a href="https://github.com/besonend/punchstopper" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>GitHub</a>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}

export default Footer;
