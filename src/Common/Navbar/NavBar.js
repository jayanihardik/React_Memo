import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        margin: "20px",
        cursor: "pointer"
    },
}));

const NavBar = () => {
    const classes = useStyles();
    let history = useHistory();

    const goToPage = (pageName) => {
        history.push(`${pageName}`)
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" onClick={() => goToPage('MemoFunction')} className={classes.title}>
                    Memo Function
                </Typography>
                <Typography variant="h6" onClick={() => goToPage('Memo')} className={classes.title}>
                    Memo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
