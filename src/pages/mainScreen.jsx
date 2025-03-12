import { Suspense, lazy, useMemo } from "react";
import { createUseStyles } from "react-jss";
import NowPlaying from "../shared/components/nowPlaying";
import CustomErrorScreen from "../shared/components/errorScreen";
import CustomLoading from "../shared/components/loading";
import useDeviceDetection from "../detectDeviceHook";
import {sendCommand} from "../api/gonextapi";

const useStyles = createUseStyles({
    root: {
        display: "flex",
        padding: "25px",
        alignItems: "center",
        justifyContent: "center",
    },
    mobile: {
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    },
    tablet: {
        flexDirection: "row",
        gap: "20px",
    },
    desktop: {
        flexDirection: "row",
        gap: "50px",
    },
});

const Webcam = lazy(() => import("react-webcam"));

const MainScreenLayout = () => {
    const device = useDeviceDetection();
    const classes = useStyles();
    const hasAccess = localStorage.getItem("access");

    const layoutClass = useMemo(() => {
        switch (device) {
            case "Mobile":
                return classes.mobile;
            case "Tablet":
                return classes.tablet;
            default:
                return classes.desktop;
        }
    }, [device, classes]);

    if (!hasAccess) {
        return <CustomErrorScreen />;
    }

    return (
        <div className={`${classes.root} ${layoutClass}`}>
            <Suspense fallback={<CustomLoading />}>
                <button onClick={() => sendCommand("next")}>GO NEXT TRACK</button>
                <button onClick={() => sendCommand("previous")}>GO PREVIOUS TRACK</button>
                <button onClick={() => sendCommand("pause")}>PAUSE</button>
                <button onClick={() => sendCommand("play")}>PLAY</button>
                <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={device === "Mobile" ? 400 : 798} height={device === "Mobile" ? 300 : 451} mirrored/>
            </Suspense>
        </div>
    );
};

export default MainScreenLayout;
