import { Suspense, lazy } from "react";
import { createUseStyles } from "react-jss";
import NowPlaying from "../shared/components/nowPlaying";
import CustomErrorScreen from "../shared/components/errorScreen";
import CommonButton from "../shared/components/commonButton";

const useStyles = createUseStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        padding: "25px",
    },
});

const Webcam = lazy(() => import("react-webcam"));

const MainScreenLayout = () => {
    const classes = useStyles();
    const hasAccess = localStorage.getItem("access");

    if (!hasAccess) {
        return <CustomErrorScreen />;
    }

    return (
        <div className={classes.root}>
            <Suspense fallback={<div>Loading Webcam...</div>}>
                <Webcam height={451} width={798} mirrored={true } />
                <NowPlaying artist="Miau Miau" song="Take me on" />
            </Suspense>
            <CommonButton/>
        </div>
    );
};

export default MainScreenLayout;
