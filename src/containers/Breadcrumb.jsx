import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import {FaPager, MdPages} from "react-icons/all";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        background: "transparent",
    },
    link: {
        display: 'flex',
        alignItems: "center",
        textTransform: 'capitalize',
        fontFamily: "Montserrat",
        fontWeight: "500",
    },
    typo: {
        display: 'flex',
        alignItems: "center",
        color: 'rgba(56,72,138,0.8)',
        textTransform: 'capitalize',
        fontFamily: "Montserrat",
        fontWeight: "500",
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 16,
        height: 16,
    },
}));

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
    const classes = useStyles();

    const location = useLocation();
    // console.log(location.pathname.split('/').length);

    // const history = useHistory()
    // history.location.pathname;

    return (
        <Paper elevation={0} className={classes.root}>
            <Breadcrumbs aria-label="Breadcrumb">
                <Link color="inherit" to="/"
                      // onClick={handleClick}
                      className={classes.link}
                >
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>
                {location?.pathname.split('/').length < 3 ? (
                    <Typography
                        color="textPrimary"
                        className={classes.typo}
                    >
                        <MdPages className={classes.icon} />
                        {location?.pathname.split('/')[1]}
                    </Typography>
                ) : (
                    <Link
                        color="inherit"
                        to="/articles"
                        // onClick={handleClick}
                        className={classes.link}
                    >
                        <MdPages className={classes.icon} />
                        {location?.pathname.split('/')[1]}
                    </Link>
                )}
                {location?.pathname.split('/')[2] && (
                    <Typography
                        color="textPrimary"
                        className={classes.typo}
                    >
                        <FaPager className={classes.icon} />
                        {location?.pathname.split('/')[2]}
                    </Typography>
                )}
            </Breadcrumbs>
        </Paper>
    );
}