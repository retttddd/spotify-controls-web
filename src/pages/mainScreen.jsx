import { Suspense, lazy } from "react";
import { createUseStyles } from "react-jss";
import NowPlaying from "../shared/components/nowPlaying";
import CustomErrorScreen from "../shared/components/errorScreen";
import CustomLoading from "../shared/components/loading";

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
            <Suspense fallback={<CustomLoading />}>
                <Webcam height={451} width={798} mirrored={true } />
                <NowPlaying artist="Miau Miau" song="Take me on" />
            </Suspense>
        </div>
    );
};

export default MainScreenLayout;
