import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Typography, Toolbar, Button} from '@material-ui/core';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null; // mock user

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? ( // user exists (is logged in), so display user info and logout button
                    <div className={classes.profile}>
                        <Button variant="contained" className={classes.logout} color="secondary" >Logout</Button>
                    </div>
                ) : ( // user does not exist, so redirect to /auth for user to sign in
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;