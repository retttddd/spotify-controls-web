import React from 'react';
import {createUseStyles} from "react-jss";
import {OrbitProgress} from "react-loading-indicators";

const useStyles = createUseStyles({
    root:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20%',
    },
})

const CustomLoading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <OrbitProgress variant="track-disc" speedPlus="3" easing="ease-in-out" color={'#976be3'} />
        </div>
    );
};

export default CustomLoading;
