import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    root:{
        fontSize: '19px',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        border: '2px solid #976be3',
        padding: '10px',
        color: '#976be3',
        fontWeight: "bold",
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
})

const CommonButton = ({ text, onClick }) => {
    const classes = useStyles();
    return (
        <button onClick={onClick}  className={classes.root}>
            {text}
        </button>
    );
};

export default CommonButton;
