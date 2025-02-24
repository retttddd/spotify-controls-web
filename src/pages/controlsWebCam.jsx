import { Suspense, lazy } from "react";
import {createUseStyles} from "react-jss";
import NowPlaying from "../shared/components/nowPlaying";

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: '25px',
    }
});

const Webcam = lazy(() => import("react-webcam"));

const CustomWebcam = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Suspense fallback={<div>Loading Webcam...</div>}>
                <Webcam height={500} width={800} />
                <NowPlaying artist={'Miau Miau'} song={'Take me on'}/>
            </Suspense>
        </div>
    );
};

export default CustomWebcam;
