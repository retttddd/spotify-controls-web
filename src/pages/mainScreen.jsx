import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Webcam from "react-webcam";
import { createUseStyles } from "react-jss";
import { Suspense } from "react";
import CustomErrorScreen from "../shared/components/errorScreen";
import CustomLoading from "../shared/components/loading";
import useDeviceDetection from "../detectDeviceHook";
import { sendCommand } from "../api/gonextapi";

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

const SOCKET_URL = "ws://127.0.0.1:5000";

const MainScreenLayout = () => {
    const webcamRef = useRef(null);
    const socketRef = useRef(null);
    const device = useDeviceDetection();
    const classes = useStyles();
    const hasAccess = localStorage.getItem("access");
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        socketRef.current = io(SOCKET_URL, { transports: ["websocket", "polling"] });

        socketRef.current.on("connect", () => console.log("Socket.IO Connected"));
        socketRef.current.on("disconnect", () => console.log("Socket.IO Disconnected"));
        socketRef.current.on("connect_error", (error) => console.error("Socket.IO Error:", error));

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        let frameInterval = null;

        const captureFrame = () => {
            if (!isStreaming || !webcamRef.current || !socketRef.current?.connected) return;

            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                socketRef.current.emit("videoframe", imageSrc);
            }

            frameInterval = setTimeout(captureFrame, 100);
        };

        if (isStreaming) {
            captureFrame();
        } else if (frameInterval) {
            clearTimeout(frameInterval);
        }

        return () => {
            if (frameInterval) {
                clearTimeout(frameInterval);
            }
        };
    }, [isStreaming]);

    const startStreaming = () => setIsStreaming(true);
    const stopStreaming = () => setIsStreaming(false);

    const layoutClass = (() => {
        switch (device) {
            case "Mobile": return classes.mobile;
            case "Tablet": return classes.tablet;
            default: return classes.desktop;
        }
    })();

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
                <button onClick={startStreaming} disabled={isStreaming}>Start Video Stream</button>
                <button onClick={stopStreaming} disabled={!isStreaming}>Stop Video Stream</button>
                <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={device === "Mobile" ? 400 : 798} height={device === "Mobile" ? 300 : 451} mirrored />
            </Suspense>
        </div>
    );
};

export default MainScreenLayout;
