import {createUseStyles} from "react-jss";
import { AlertTriangle } from "lucide-react";
import {useNavigate} from "react-router-dom";
import CommonButton from "./commonButton";

const useStyles = createUseStyles({
    root: {
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f5ff",
        color: "#976be3",
        textAlign: "center",
        padding: "20px",
        gap: "15px",
    },
    icon: {
        fontSize: "60px",
        color: "#976be3",
        marginBottom: "15px",
    },
    message: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    description: {
        fontSize: "16px",
        marginTop: "10px",
        maxWidth: "400px",
    },
});

const CustomErrorScreen = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.root}>
            <AlertTriangle size={60} className={classes.icon} />
            <div className={classes.message}>Oops! Something went wrong.</div>
            <div className={classes.description}>
                We encountered an unexpected error. Please try again later.
            </div>
            <CommonButton text={'Go Home'} onClick={()=>{navigate('/')}} />
        </div>
    );
};

export default CustomErrorScreen;
