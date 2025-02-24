import { createUseStyles } from "react-jss";
import ArrowIcon from "../icons/arrow";

const useStyles = createUseStyles({
    root: {
        userSelect: 'none',
        borderRadius: '10px',
        border: '2px solid #976be3',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        padding: '15px',
        alignItems: 'center',
    },
    text: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#976be3',
    },
});

const NextArrowButton = ({ onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={onClick}>
            <div className={classes.container}>
                <span className={classes.text}> LOGIN </span>
                <ArrowIcon />
            </div>
        </div>
    );
};

export default NextArrowButton;
